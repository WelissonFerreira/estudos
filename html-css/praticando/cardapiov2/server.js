// A função imprimirPedido completa e corrigida para server.js
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
        
        // CORREÇÃO AQUI: Lógica para processar adicionais
        if (item.adicionais && Object.keys(item.adicionais).length > 0) {
            dadosParaImpressao += ` - Adicionais:\n`;
            for (const nomeAdicional in item.adicionais) {
                const adicional = item.adicionais[nomeAdicional];
                const quantidadeAdicional = parseInt(adicional.quantidade, 10);

                // Verifica se o adicional tem um preço (é um adicional pago)
                if (adicional.preco !== undefined) {
                    const precoAdicional = parseFloat(adicional.preco) || 0;
                    precoTotalItem += (precoAdicional * quantidadeAdicional);
                    dadosParaImpressao += `  -> ${nomeAdicional} (${quantidadeAdicional}) - R$ ${(precoAdicional * quantidadeAdicional).toFixed(2).replace('.', ',')}\n`;
                } else {
                    // Se não tiver preço, é um topping grátis de açaí
                    dadosParaImpressao += `  -> ${nomeAdicional} (${quantidadeAdicional})\n`;
                }
            }
        }

        if (item.bebidas && Object.keys(item.bebidas).length > 0) {
            dadosParaImpressao += ` - Bebidas:\n`;
            for (const nomeBebida in item.bebidas) {
                const precoBebida = parseFloat(item.bebidas[nomeBebida].preco) || 0;
                const quantidadeBebida = parseInt(item.bebidas[nomeBebida].quantidade, 10);
                precoTotalItem += (precoBebida * quantidadeBebida);
                dadosParaImpressao += `  -> ${nomeBebida} (${quantidadeBebida}) - R$ ${(precoBebida * quantidadeBebida).toFixed(2).replace('.', ',')}\n`;
            }
        }
        
        // Adiciona o total do item ao subtotal geral
        subtotalItens += (precoTotalItem * item.quantidade);

        // Opcional: Adiciona uma linha com o total do item para clareza na comanda
        dadosParaImpressao += `   -> Total do Item: R$ ${(precoTotalItem * item.quantidade).toFixed(2).replace('.', ',')}\n`;
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