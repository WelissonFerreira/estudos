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

// FUNÇÃO DE IMPRESSÃO ADAPTADA PARA INGREDIENTES DE AÇAÍ
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

        // Detecta se é açaí pelo tipo ou pelo nome
        const isAcai = item.tipo === 'acai' || item.nome.toLowerCase().includes('acai');

        dadosParaImpressao += `${item.quantidade}x ${item.nome} - R$ ${precoBase.toFixed(2).replace('.', ',')}\n`;

        if (item.observacoes) {
            dadosParaImpressao += ` - Obs: ${item.observacoes}\n`;
        }

        // Ingredientes do açaí
        if (isAcai && item.ingredientes) {
            dadosParaImpressao += ` - Ingredientes:\n`;
            if (item.ingredientes.acompanhamentos) {
                for (const nome in item.ingredientes.acompanhamentos) {
                    const qt = item.ingredientes.acompanhamentos[nome];
                    dadosParaImpressao += `   -> ${nome} (${qt})\n`;
                }
            }
            if (item.ingredientes.frutas) {
                for (const nome in item.ingredientes.frutas) {
                    const qt = item.ingredientes.frutas[nome];
                    dadosParaImpressao += `   -> ${nome} (${qt})\n`;
                }
            }
            if (item.ingredientes.coberturas) {
                for (const nome in item.ingredientes.coberturas) {
                    const qt = item.ingredientes.coberturas[nome];
                    dadosParaImpressao += `   -> ${nome} (${qt})\n`;
                }
            }
        }

        // Adicionais do lanche
        if (!isAcai && item.adicionais && Object.keys(item.adicionais).length > 0) {
            dadosParaImpressao += ` - Adicionais:\n`;
            for (const nomeAd in item.adicionais) {
                const adicional = item.adicionais[nomeAd];
                const qt = adicional.quantidade || 1;
                const precoAd = parseFloat(adicional.preco) || 0;
                precoTotalItem += precoAd * qt;
                dadosParaImpressao += `   -> ${nomeAd} (${qt}) - R$ ${(precoAd * qt).toFixed(2).replace('.', ',')}\n`;
            }
        }

        // Bebidas
        if (item.bebidas && Object.keys(item.bebidas).length > 0) {
            dadosParaImpressao += ` - Bebidas:\n`;
            for (const nomeBebida in item.bebidas) {
                const bebida = item.bebidas[nomeBebida];
                const qt = bebida.quantidade || 1;
                const precoBebida = parseFloat(bebida.preco) || 0;
                precoTotalItem += precoBebida * qt;
                dadosParaImpressao += `   -> ${nomeBebida} (${qt}) - R$ ${(precoBebida * qt).toFixed(2).replace('.', ',')}\n`;
            }
        }

        subtotalItens += precoTotalItem;
        dadosParaImpressao += `  -> Total do Item: R$ ${precoTotalItem.toFixed(2).replace('.', ',')}\n\n`;
    });

    dadosParaImpressao += "--------------------\n";
    dadosParaImpressao += `Subtotal: R$ ${subtotalItens.toFixed(2).replace('.', ',')}\n`;

    let valorTotal = subtotalItens;
    if (pedido.taxaEntrega && pedido.taxaEntrega > 0) {
        dadosParaImpressao += `Taxa de Entrega: R$ ${pedido.taxaEntrega.toFixed(2).replace('.', ',')}\n`;
        valorTotal += pedido.taxaEntrega;
    }

    dadosParaImpressao += `\nTOTAL DO PEDIDO: R$ ${valorTotal.toFixed(2).replace('.', ',')}\n`;
    dadosParaImpressao += "--------------------\n";
    dadosParaImpressao += `Forma de Pagamento: ${pedido.pagamento}\n`;
    if (pedido.troco && pedido.troco > 0) {
        dadosParaImpressao += `Troco para: R$ ${pedido.troco.toFixed(2).replace('.', ',')}\n`;
    }
    dadosParaImpressao += "--------------------\n\n\n\n";

    console.log(dadosParaImpressao);
}

// TESTANDO COM UM PEDIDO DE AÇAÍ COM INGREDIENTES
const pedidoTeste = {
    cliente: {
        nome: "João da Silva",
        telefone: "99999999999",
        tipo: "Entrega",
        endereco: { bairro: "Central", rua: "Rua A", numero: "123", complemento: "Ap 101" }
    },
    data: { toDate: () => new Date() },
    itens: [
        {
            nome: "Açaí 500ml",
            tipo: "acai",
            precoBase: 22.00,
            quantidade: 1,
            observacoes: "",
            ingredientes: {
                acompanhamentos: { "Granola": 1, "Leite Condensado": 1 },
                frutas: { "Banana": 1 },
                coberturas: { "Chocolate": 1 }
            },
            adicionais: {},
            bebidas: {}
        },
        {
            nome: "Hamburguer X-Tudo",
            precoBase: 25.00,
            quantidade: 1,
            observacoes: "sem cebola",
            adicionais: { "Bacon": { quantidade: 1, preco: 7 }, "Queijo": { quantidade: 2, preco: 5 } },
            bebidas: { "Refrigerante 2L": { quantidade: 1, preco: 8 } }
        }
    ],
    taxaEntrega: 5,
    pagamento: "PIX",
    troco: 0
};

imprimirPedido(pedidoTeste, "COMANDA COZINHA");
