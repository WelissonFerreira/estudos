// Este código simula o seu Front-end e o seu Back-end juntos.
// Use-o para testar as mudanças.

// SIMULANDO OS CATÁLOGOS QUE VOCÊ TEM NO FRONT-END
const catalogoDeProdutos = {
    'lanche-1': { nome: "Hamburguer X-Tudo", preco: 25.00 },
    'lanche-2': { nome: "Batata Frita", preco: 12.50 },
    'acai': { nome: "Açai 500ml", preco: 22.00 },
    'refrigerante-2l': { nome: "Refrigerante 2L", preco: 8.00 },
    'refrigerante-lata': { nome: "Refrigerante Lata", preco: 8.00 }
};

const catalogoDeAdicionais = [
    { nome: "Bacon", preco: 7.00 },
    { nome: "Queijo", preco: 5.00 },
    { nome: "Molho Rosé", preco: 3.00 }
];

// SIMULANDO A FUNÇÃO DE IMPRESSÃO
// Esta é a função FINAL e CORRETA que deve estar no seu server.js
function imprimirPedido(pedido, tipoComanda) {
    const dataDoPedido = pedido.data.toDate();
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
        const precoBase = parseFloat(item.precoBase) || 0;
        let precoTotalItem = precoBase;
        dadosParaImpressao += `${item.quantidade}x ${item.nome} - R$ ${precoBase.toFixed(2).replace('.', ',')}\n`;
        
        if (item.observacoes) {
            dadosParaImpressao += ` - Obs: ${item.observacoes}\n`;
        }
        
        if (item.adicionais && Object.keys(item.adicionais).length > 0) {
            dadosParaImpressao += ` - Adicionais:\n`;
            for (const nomeAdicional in item.adicionais) {
                const precoAdicional = parseFloat(item.adicionais[nomeAdicional].preco) || 0;
                const quantidadeAdicional = parseInt(item.adicionais[nomeAdicional].quantidade, 10);
                precoTotalItem += (precoAdicional * quantidadeAdicional);
                dadosParaImpressao += `  -> ${nomeAdicional} (${quantidadeAdicional}) - R$ ${(precoAdicional * quantidadeAdicional).toFixed(2).replace('.', ',')}\n`;
            }
        }

        if (item.bebidas && Object.keys(item.bebidas).length > 0) {
            dadosParaImpressao += ` - Bebidas:\n`;
            for (const nomeBebida in item.bebidas) {
                const precoBebida = parseFloat(item.bebidas[nomeBebida].preco) || 0;
                const quantidadeBebida = parseInt(item.bebidas[nomeBebida].quantidade, 10);
                precoTotalItem += (precoBebida * quantidadeBebida);
                dadosParaImpressao += `  -> ${nomeBebida} (${quantidadeBebida}) - R$ ${(precoBebida * quantidadeBebida).toFixed(2).replace('.', ',')}\n`;
            }
        }
        
        subtotalItens += precoTotalItem;
        dadosParaImpressao += `  -> Total do Item: R$ ${precoTotalItem.toFixed(2).replace('.', ',')}\n`;
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
        dadosParaImpressao += `Troco para: R$ ${pedido.troco.toFixed(2).replace('.', ',')}\n`;
    }
    dadosParaImpressao += "--------------------\n\n\n\n";

    console.log(dadosParaImpressao);
}

// SIMULANDO A NOVA ESTRUTURA DE DADOS ENVIADA DO FRONT-END
const pedidoComAdicionaisEBebidas = {
    cliente: {
        nome: "João da Silva",
        telefone: "99999999999",
        tipo: "Entrega",
        endereco: {
            bairro: "Bairro Central",
            rua: "Rua das Flores",
            numero: "123",
            complemento: "Apartamento 101"
        }
    },
    data: { toDate: () => new Date() },
    itens: [
        { 
            nome: "Hamburguer X-Tudo", 
            precoBase: 25.00,
            quantidade: 1, 
            observacoes: "sem cebola",
            adicionais: {
                "Bacon": { quantidade: 1, preco: 7.00 },
                "Queijo": { quantidade: 2, preco: 5.00 }
            },
            bebidas: {}
        },
        { 
            nome: "Açai 500ml", 
            precoBase: 22.00,
            quantidade: 1, 
            observacoes: "",
            adicionais: {},
            bebidas: {
                "Refrigerante 2L": { quantidade: 1, preco: 8.00 }
            }
        },
        { 
            nome: "Batata Frita", 
            precoBase: 12.50,
            quantidade: 1, 
            observacoes: "com pouco sal",
            adicionais: {},
            bebidas: {}
        }
    ],
    taxaEntrega: 5.00,
    pagamento: "PIX",
    troco: 0
};

// SIMULANDO UM PEDIDO MAIS SIMPLES DE RETIRADA
const pedidoSimples = {
    cliente: {
        nome: "Maria Oliveira",
        telefone: "98888888888",
        tipo: "Retirada"
    },
    data: { toDate: () => new Date() },
    itens: [
        { 
            nome: "Refrigerante Lata", 
            precoBase: 8.00, 
            quantidade: 2, 
            observacoes: "",
            adicionais: {},
            bebidas: {}
        }
    ],
    taxaEntrega: 0,
    pagamento: "Dinheiro",
    troco: 20
};


// CHAMANDO A FUNÇÃO DE TESTE
console.log("--- TESTANDO PEDIDO COM ITENS, ADICIONAIS E BEBIDAS ---");
imprimirPedido(pedidoComAdicionaisEBebidas, 'COMANDA COZINHA');

console.log("\n\n--- TESTANDO PEDIDO MAIS SIMPLES (SOMENTE ITENS) ---");
imprimirPedido(pedidoSimples, 'COMANDA COZINHA');