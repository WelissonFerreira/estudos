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
        const isAcai = item.tipo.toLowerCase() === 'acai';
        let precoBase = parseFloat(item.precoBase) || 0;
        let precoTotalItem = precoBase;

        dadosParaImpressao += isAcai ? `ACAI - ${item.nome}\n` : `LANCHE - ${item.nome}\n`;
        dadosParaImpressao += `${item.quantidade}x R$ ${precoBase.toFixed(2).replace('.', ',')}\n`;

        // Adicionais do açaí (todos em item.adicionais)
        if (isAcai && item.adicionais && Object.keys(item.adicionais).length > 0) {
            dadosParaImpressao += "  - Toppings:\n";
            for (const nome in item.adicionais) {
                const qt = item.adicionais[nome].quantidade || 1;
                dadosParaImpressao += `    -> ${nome} (${qt})\n`;
            }
        }

        // Adicionais do lanche
        if (!isAcai && item.adicionais && Object.keys(item.adicionais).length > 0) {
            dadosParaImpressao += "  - Adicionais:\n";
            for (const nome in item.adicionais) {
                const adicional = item.adicionais[nome];
                const qt = adicional.quantidade || 1;
                const precoAdicional = parseFloat(adicional.preco) || 0;
                precoTotalItem += precoAdicional * qt;
                dadosParaImpressao += `    -> ${nome} (${qt}) - R$ ${(precoAdicional * qt).toFixed(2).replace('.', ',')}\n`;
            }
        }

        // Bebidas
        if (item.bebidas && Object.keys(item.bebidas).length > 0) {
            dadosParaImpressao += "  - Bebidas:\n";
            for (const nome in item.bebidas) {
                const bebida = item.bebidas[nome];
                const qt = bebida.quantidade || 1;
                const precoBebida = parseFloat(bebida.preco) || 0;
                precoTotalItem += precoBebida * qt;
                dadosParaImpressao += `    -> ${nome} (${qt}) - R$ ${(precoBebida * qt).toFixed(2).replace('.', ',')}\n`;
            }
        }

        subtotalItens += precoTotalItem * item.quantidade;
        dadosParaImpressao += `   -> Total do Item: R$ ${(precoTotalItem * item.quantidade).toFixed(2).replace('.', ',')}\n\n`;
    });

    dadosParaImpressao += `--------------------\n`;
    dadosParaImpressao += `Subtotal: R$ ${subtotalItens.toFixed(2).replace('.', ',')}\n`;

    let valorTotal = subtotalItens;
    if (pedido.taxaEntrega && pedido.taxaEntrega > 0) {
        dadosParaImpressao += `Taxa de Entrega: R$ ${pedido.taxaEntrega.toFixed(2).replace('.', ',')}\n`;
        valorTotal += pedido.taxaEntrega;
    }

    dadosParaImpressao += `\nTOTAL DO PEDIDO: R$ ${valorTotal.toFixed(2).replace('.', ',')}\n`;
    dadosParaImpressao += `--------------------\n`;
    dadosParaImpressao += `Forma de Pagamento: ${pedido.pagamento}\n`;
    if (pedido.troco && pedido.troco > 0) {
        dadosParaImpressao += `Troco: R$ ${pedido.troco.toFixed(2).replace('.', ',')}\n`;
    }
    dadosParaImpressao += `--------------------\n\n\n\n`;

    // Impressão direta
    printer.printDirect({
        data: Buffer.from(dadosParaImpressao, 'latin1'),
        printer: nomeDaImpressora,
        type: 'RAW',
        success: jobID => console.log('Impressão enviada, ID do trabalho: ' + jobID),
        error: err => console.error('Erro ao imprimir:', err)
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
                .then(() => console.log(`Pedido ${docId} removido do Firestore.`))
                .catch(err => console.error('Erro ao remover o pedido:', err));
        }
    });
}, err => {
    console.error('Erro ao ouvir mudanças no Firestore:', err);
});

console.log('Servidor de impressão iniciado. Ouvindo novos pedidos no Firestore...');
