// server.js

// 1. IMPORTAÇÕES E CONFIGURAÇÃO
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const printer = require('@thiagoelg/node-printer');
const nomeDaImpressora = 'POS-58';

// Inicializa o Firebase com a chave de serviço
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// 2. REFERÊNCIAS AO FIRESTORE
const db = admin.firestore();
const pedidosRef = db.collection('pedidos');

// 3. FUNÇÃO DE IMPRESSÃO
function imprimirPedido(pedido, tipoComanda) {
    const dataDoPedido = pedido.data.toDate ? pedido.data.toDate() : new Date(pedido.data);
    const dataFormatada = dataDoPedido.toLocaleDateString('pt-BR');
    const horaFormatada = dataDoPedido.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    let dadosParaImpressao = `--- NOVO PEDIDO | ARTHUR LANCHES | ${tipoComanda} ---\n\n`;
    dadosParaImpressao += `Data: ${dataFormatada} | Hora: ${horaFormatada}\n`; 
    dadosParaImpressao += `Nome do Cliente: ${pedido.cliente.nome}\n`;
    dadosParaImpressao += `Telefone: ${pedido.cliente.telefone}\n`;
    dadosParaImpressao += `Tipo de Pedido: ${pedido.cliente.tipo}\n\n`;

    if (pedido.cliente.tipo === 'Entrega' && pedido.cliente.endereco) {
        dadosParaImpressao += `--- ENDEREÇO DE ENTREGA ---\n`;
        dadosParaImpressao += `Bairro: ${pedido.cliente.endereco.bairro}\n`;
        dadosParaImpressao += `Rua: ${pedido.cliente.endereco.rua}\n`;
        dadosParaImpressao += `Número: ${pedido.cliente.endereco.numero}\n`;
        if (pedido.cliente.endereco.complemento) {
            dadosParaImpressao += `Complemento: ${pedido.cliente.endereco.complemento}\n`;
        }
        dadosParaImpressao += `\n`;
    }

    dadosParaImpressao += "--- ITENS DO PEDIDO ---\n";
    let subtotalItens = 0;

    pedido.itens.forEach(item => {
        let precoBase = parseFloat(item.precoBase) || 0;
        let precoTotalItem = precoBase;

        const isAcai = item.nome.toLowerCase().includes('açai');
        dadosParaImpressao += isAcai ? `AÇAI\n` : `LANCHE\n`;

        dadosParaImpressao += `${item.quantidade}x ${item.nome} - R$ ${precoBase.toFixed(2).replace('.', ',')}\n`;

        if (item.observacoes) {
            dadosParaImpressao += ` - Obs: ${item.observacoes}\n`;
        }

        // ADICIONAIS (lanches ou açaí)
        if (item.adicionais && Object.keys(item.adicionais).length > 0) {
            dadosParaImpressao += ` - Adicionais/Toppings:\n`;
            for (const nomeAdicional in item.adicionais) {
                const adicional = item.adicionais[nomeAdicional];
                const quantidade = parseInt(adicional.quantidade, 10) || 1;
                if (adicional.preco !== undefined) {
                    const precoAdicional = parseFloat(adicional.preco) || 0;
                    precoTotalItem += precoAdicional * quantidade;
                    dadosParaImpressao += `  -> ${nomeAdicional} (${quantidade}) - R$ ${(precoAdicional * quantidade).toFixed(2).replace('.', ',')}\n`;
                } else {
                    dadosParaImpressao += `  -> ${nomeAdicional} (${quantidade})\n`;
                }
            }
        }

        // BEBIDAS
        if (item.bebidas && Object.keys(item.bebidas).length > 0) {
            dadosParaImpressao += ` - Bebidas:\n`;
            for (const nomeBebida in item.bebidas) {
                const bebida = item.bebidas[nomeBebida];
                const quantidadeBebida = parseInt(bebida.quantidade, 10) || 1;
                const precoBebida = parseFloat(bebida.preco) || 0;
                precoTotalItem += precoBebida * quantidadeBebida;
                dadosParaImpressao += `  -> ${nomeBebida} (${quantidadeBebida}) - R$ ${(precoBebida * quantidadeBebida).toFixed(2).replace('.', ',')}\n`;
            }
        }

        subtotalItens += precoTotalItem * item.quantidade;
        dadosParaImpressao += `   -> Total do Item: R$ ${(precoTotalItem * item.quantidade).toFixed(2).replace('.', ',')}\n`;
    });

    dadosParaImpressao += "\n--------------------\n";
    dadosParaImpressao += `Subtotal: R$ ${subtotalItens.toFixed(2).replace('.', ',')}\n`;

    let valorTotal = subtotalItens;
    if (pedido.taxaEntrega > 0) {
        dadosParaImpressao += `Taxa de Entrega: R$ ${pedido.taxaEntrega.toFixed(2).replace('.', ',')}\n`;
        valorTotal += pedido.taxaEntrega;
    }

    dadosParaImpressao += `\nTOTAL DO PEDIDO: R$ ${valorTotal.toFixed(2).replace('.', ',')}\n`;
    dadosParaImpressao += "--------------------\n";
    dadosParaImpressao += `Forma de Pagamento: ${pedido.pagamento}\n`;

    if (pedido.troco > 0) {
        dadosParaImpressao += ` R$ ${pedido.troco.toFixed(2).replace('.', ',')}\n de troco!`;
    }
    dadosParaImpressao += "--------------------\n\n\n\n";

    printer.printDirect({
        data: Buffer.from(dadosParaImpressao, 'latin1'),
        printer: nomeDaImpressora,
        type: 'RAW',
        success: function(jobID) {
            console.log('Impressão enviada, ID do trabalho: ' + jobID);
        },
        error: function(err) {
            console.error('Erro ao imprimir:', err);
        }
    });
}

// 4. ESCUTA DOS PEDIDOS DO FIRESTORE
pedidosRef.onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
            const novoPedido = change.doc.data();
            const docId = change.doc.id;

            console.log('Novo pedido recebido do Firestore!');

            // Imprime comanda para a cozinha
            imprimirPedido(novoPedido, '===== COMANDA COZINHA =====');

            // Imprime comanda para entregador, se for entrega
            if (novoPedido.cliente.tipo === 'Entrega') {
                imprimirPedido(novoPedido, '===== COMANDA ENTREGADOR =====');
            }

            // Remove documento após impressão
            db.collection('pedidos').doc(docId).delete()
                .then(() => {
                    console.log(`Pedido ${docId} removido do Firestore.`);
                })
                .catch(err => {
                    console.error('Erro ao remover o pedido:', err);
                });
        }
    });
}, err => {
    console.error('Erro ao ouvir mudanças no Firestore:', err);
});

console.log('Servidor de impressão iniciado. Ouvindo novos pedidos no Firestore...');
