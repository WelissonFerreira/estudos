// SIMULANDO A FUNÇÃO DE IMPRESSÃO
function imprimirPedido(pedido, tipoComanda) {
    // Converte o Timestamp simulado para uma data JavaScript
    const dataDoPedido = pedido.data.toDate();
    const dataFormatada = dataDoPedido.toLocaleDateString('pt-BR');
    const horaFormatada = dataDoPedido.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    // Monta a string com todos os dados do pedido
    let dadosParaImpressao = `--- NOVO PEDIDO | ARTHUR LANCHES | ${tipoComanda} ---\n\n `;
    dadosParaImpressao += `Data: ${dataFormatada} | Hora: ${horaFormatada}\n`; 
    dadosParaImpressao += `Nome do Cliente: ${pedido.cliente.nome}\n`;
    dadosParaImpressao += `Telefone: ${pedido.cliente.telefone}\n`;
    dadosParaImpressao += `Tipo de Pedido: ${pedido.cliente.tipo}\n\n`;

    // Adiciona o endereço, se ele existir
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
    pedido.itens.forEach(item => {
        dadosParaImpressao += `${item.quantidade}x ${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')}\n`;
        if (item.observacoes) {
            dadosParaImpressao += ` - Obs: ${item.observacoes}\n`;
        }
    });

    dadosParaImpressao += "\n--------------------\n";
    dadosParaImpressao += `Forma de Pagamento: ${pedido.pagamento}\n`;
    if (pedido.troco > 0) {
        dadosParaImpressao += `Troco para: R$ ${pedido.troco.toFixed(2).replace('.', ',')}\n`;
    }
    dadosParaImpressao += "--------------------\n\n";

    // AQUI: Usamos console.log em vez de enviar para a impressora
    console.log(dadosParaImpressao);
}

// SIMULANDO UM OBJETO DE PEDIDO DE ENTREGA
const pedidoDeEntrega = {
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
    data: { toDate: () => new Date() }, // Simula o Timestamp do Firebase
    itens: [
        { nome: "Hamburguer X-Tudo", preco: 25.00, quantidade: 2, observacoes: "sem cebola" },
        { nome: "Batata Frita", preco: 12.50, quantidade: 1 }
    ],
    taxaEntrega: 5.00,
    pagamento: "PIX",
    troco: 0
};

// SIMULANDO UM OBJETO DE PEDIDO DE RETIRADA
const pedidoDeRetirada = {
    cliente: {
        nome: "Maria Oliveira",
        telefone: "98888888888",
        tipo: "Retirada"
    },
    data: { toDate: () => new Date() },
    itens: [
        { nome: "Refrigerante 2L", preco: 8.00, quantidade: 1 }
    ],
    taxaEntrega: 0,
    pagamento: "Dinheiro",
    troco: 20
};


// CHAMANDO A FUNÇÃO DE TESTE
console.log("--- TESTANDO DE PEDIDO DE ENTREGA ---");
imprimirPedido(pedidoDeEntrega, 'COMANDA COZINHA');
imprimirPedido(pedidoDeEntrega, 'COMANDA ENTREGADOR')

/*console.log("\n\n--- TESTE DE PEDIDO DE RETIRADA ---");
imprimirPedido(pedidoDeRetirada);*/