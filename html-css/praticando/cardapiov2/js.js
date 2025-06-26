let catalogoDeProdutos = {
    "produto-arthur-grande": { // Esta é a CHAVE, que corresponde ao seu data-produto-id
        nome: "Especial Arthur Grande",
        preco: 55.00,
        descricao: "Especial da casa, dividido em 4 pedaços e servem 4 pessoas.",
        ingredientes: [
            "2x Salsicha",
            "2x Hamburguer",
            "2x Calabresa",
            "2x Bacon",
            "2x Salada",
            "2x Tomate"
        ],
        imagem: "https://bing.com/th/id/BCO.6614432f-37cc-4f4a-b0d0-a8374cd7cf25.png"
    },

    "produto-arthur-baby": {
        nome: "Especial Arthur Baby",
        preco: 40.00,
        descricao: "Especial da casa, dividido em 2 pedaços e servem 2 pessoas.",
        ingredientes: [
            "1x Salsicha",
            "1x Hamburguer",
            "1x Calabresa",
            "1x Bacon",
            "1x Salada",
            "1x Tomate"
        ],
        imagem: "https://bing.com/th/id/BCO.6614432f-37cc-4f4a-b0d0-a8374cd7cf25.png"
    },

    "produto-passaporte-carne": {
        nome: "Passaporte de Carne",
        preco: 17.00,
        descricao: "Passaporte de carne super recheado",
        ingredientes: [
            "1x Pão",
            "Carne Moída",
            "1x Salsicha",
            "Batata Palha",
            "Milho e Ervilha",
            "Catchup",
            "Maionese"
        ],
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BfCtfn9H3hiFEp4fMcYVnQi-waU3Aj0wqg&s"
    },

    "produto-passaporte-frango": {
        nome: "Passaporte de Frango",
        preco: 18.00,
        descricao: "Passaporte de frango super recheado",
        ingredientes: [
            "1x Pão",
            "Frango Desfiado",
            "1x Salsicha",
            "Milho e Ervilha",
            "Maionese"
        ],
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BfCtfn9H3hiFEp4fMcYVnQi-waU3Aj0wqg&s"
    },

    "produto-xbacon": {
        nome: "X-Bacon",
        preco: 22.00,
        descricao: "Especial da casa, dividido em 4 pedaços e servem 4 pessoas.",
        ingredientes: [
            "1x Pão",
            "Bacon",
            "1x Ovo",
            "Salada",
            "Tomate",
        ],
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BfCtfn9H3hiFEp4fMcYVnQi-waU3Aj0wqg&s"
    },

    "produto-cocacola": {
        nome: "Coca-Cola 250 ml" ,
        preco: 6.00 ,
        descricao: "Coca-Cola em lata de 250 ml",
        imagem: "https://s3-sa-east-1.amazonaws.com/loja2/5f3dd775f8306fac0109bb1f4df90bba.png"
    },
    
}


/* Botão ver mais programado */ 
// 2. Variável para TODOS os botões "Ver mais"
let btnAbriModal = document.querySelectorAll('.botaomodal');

// FUNÇÃO PARA VER DETALHES DOS PRODUTOS
btnAbriModal.forEach(function(botaoAtual) { 
    botaoAtual.addEventListener('click', function(event) {
        event.preventDefault();
        
        //  Exibir o modal correspondente ao botão clicado
        let SeletorDoModal = botaoAtual.dataset.modelTarget; // Acessa o valor do atributo data-model-target do HTML
        let modalParaAbrir = document.querySelector(SeletorDoModal); // Seleciona o modal correspondente

        modalParaAbrir.style.display = 'block'; // Exibe o modal
        
        // 1. Encontrar o botão de fechar DENTRO DESTE modal que abriu
        let fecharbotaomodal = modalParaAbrir.querySelector('.close-button')

        // 2. Adicionar um evento de clique a ESTE botão de fechar
        fecharbotaomodal.addEventListener('click', function() {
            // 3. Fazer APENAS ESTE modal desaparecer
            modalParaAbrir.style.display = 'none';
        })

        // Opcional: Fechar o modal clicando fora dele
        // Esta parte é um pouco mais avançada, mas muito comum para UX.
        // Adiciona um ouvinte de clique à janela.
        window.addEventListener('click', function(e) {
            // Se o clique foi NO PRÓPRIO MODAL (na área escura de fundo)
            // Lembre-se que o 'modalParaAbrir' é o fundo escuro que cobre a tela.
            if (e.target === modalParaAbrir) {
                modalParaAbrir.style.display = 'none'; // Fecha o modal
            }

        })

    })

})




 // Configurando botão do carrinnho para o contador do carrinho e para pegar os objetos
let btnCarrinhoContador = document.querySelectorAll('.AdicionarCarrinho')
let contadorCarrinho = document.querySelector('.contcarrinho')
let valorCarrinho = 0
let itensCarrinho = [];

// FUNÇÃO CONTADOR DO CARRINHO
// Para cada botão de adicionar ao carrinho, adicione um 'click listener'
btnCarrinhoContador.forEach(function(botaoCarrinho) {
    botaoCarrinho.addEventListener('click', function() {
        // Incrementa o valor do contador do carrinho (este pode continuar)
        
        
        // Pega o ID único do produto a partir do atributo 'data-produto-id' do botão clicado
        let seletorDoCarrinho = botaoCarrinho.dataset.produtoId;
        
        // Usa o ID para encontrar e obter o objeto completo do produto no 'catalogoDeProdutos'
        let produtoSelecionado = catalogoDeProdutos[seletorDoCarrinho];

        // *** A PARTIR DAQUI É O NOVO CÓDIGO QUE SUBSTITUI O SEU `itensCarrinho.push(...)` ***
        // 1. Procurar se o item já existe no carrinho
        let itemExistente = itensCarrinho.find(function(item) {
            return item.produtoId === seletorDoCarrinho;
});

        if (itemExistente) {
            // 2. Se o item já existe, incrementa a quantidade dele
            itemExistente.quantidade++;
        } else {
            // 3. Se o item NÃO existe, adiciona ele ao carrinho com quantidade 1
            itensCarrinho.push({
                produtoId: seletorDoCarrinho, // Adicione o ID para fácil referência
                produto: produtoSelecionado,
                quantidade: 1
            });
        }
        // *** FIM DO NOVO CÓDIGO ***

        // Chama a Função atualizar o carrinho (este pode continuar)
        atualizarCarrinho();
        console.log(itensCarrinho); // Verifique o novo formato do carrinho
    });
});


let abrirCarrinho = document.querySelector('#botaoCarrinho')
let modalCarrinho = document.querySelector('#ModalCarrinho')
let fecharCarrinho = document.querySelector('.close-button-carrinho')

    // FUNÇÃO ABRIR CARRINHO
    abrirCarrinho.addEventListener('click', function(event) {
        event.preventDefault();

        modalCarrinho.style.display = 'block'
        document.body.style.overflow = 'hidden'

        atualizarCarrinho()

    })
    // FUNÇÃO FECHAR O CARRINHO
    fecharCarrinho.addEventListener('click', function() {
        modalCarrinho.style.display = 'none';
        document.body.style.overflow = 'auto'
    })

    
     //FUNÇÃO EXIBIR ITENS DO CARRINHO
    let itensDoCarrinhoDiv = document.querySelector('#itens-do-carrinho')
    function mostrarItensDoCarrinho() {
        itensDoCarrinhoDiv.textContent = "" // Limpa o conteúdo atual
        // Próximo passo: verificar se o carrinho está vazio
        if (itensCarrinho.length === 0) {
            itensDoCarrinhoDiv.textContent = "Seu carrinho está vazio!"
        } else {
            itensCarrinho.forEach(function(item) { // Percorrendo os itens do Carrinho com forEach

            

                // Criando uma div Pai para controlar melhor o FlexBox
                let divItemCarrinho = document.createElement('div'); // Cria a div Pai
                divItemCarrinho.classList.add('item-do-carrinho'); // *** Importante: adicione uma classe para o CSS ***

                // Criando DIV e pegando nome do produto
                let divNomeProduto = document.createElement('h3')
                divNomeProduto.textContent = item.produto.nome
                divNomeProduto.classList.add('nomeProduto')
                
                // Cria um paragrafo e pega a descrição do produto
                let descricaoProduto = document.createElement('p')
                descricaoProduto.textContent = `${item.produto.descricao}`
                
                // Cria um span e pega o preço do produto.
                let spanPrecoProduto = document.createElement('span')
                spanPrecoProduto.textContent = `R$ ${item.produto.preco.toFixed(2).replace('.',',')}`;
                spanPrecoProduto.classList.add('precoCarrinho')

                // BOTÃO REMOVER ITENS
                let botaoRemover = document.createElement('button')
                // Cria o elemento <i> para o ícone do Font Awesome
                let iconeRemover = document.createElement('i');
                iconeRemover.classList.add('fa-solid', 'fa-trash-can'); // Adiciona as classes do Font Awesome
                botaoRemover.classList.add('btnRemover')

                botaoRemover.addEventListener('click', function() {
                let encontrarItem = itensCarrinho.indexOf(item)
                itensCarrinho.splice(encontrarItem, 1)

                contadorCarrinho.textContent = `0`
                
                atualizarCarrinho()


                })

                // Div Controle de Quantidades de Itens
                let divControleDeQuantidade = document.createElement('div') // Div 
                divControleDeQuantidade.classList.add('controles-quantidade')
                
                // BOTÃO AUMENTAR
                let botaoAumentar = document.createElement('button') // Botão de Aumentar
                botaoAumentar.textContent = `+`
                botaoAumentar.classList.add('btnAumentar')

                botaoAumentar.addEventListener('click', function() {
                let quantidadeTotal = item.quantidade + 1
                item.quantidade = quantidadeTotal
                spanQuantidade.textContent = `${quantidadeTotal}`

                
                

                atualizarCarrinho()
                
                })
                
                // SPAN QUANTIDADE | TEXTO HTML
                let spanQuantidade = document.createElement('span')
                spanQuantidade.textContent = item.quantidade
                spanQuantidade.classList.add('quantidade-item')



                // BOTÃO DIMINUIR
                let botaoDiminuir = document.createElement('button') // Botão de Diminuir
                botaoDiminuir.textContent = `-` // Conteudo do botão
                botaoDiminuir.classList.add('btnDiminuir')
                
                botaoDiminuir.addEventListener('click', function() {

                if (item.quantidade === 1) {
                    let encontrarItem = itensCarrinho.indexOf(item)
                    itensCarrinho.splice(encontrarItem, 1)
                    //contadorCarrinho.textContent = `0`
                    atualizarCarrinho()
                    
                } else {
                    let quantidadeTotal = item.quantidade - 1
                
                    item.quantidade = quantidadeTotal
                    spanQuantidade.textContent = `${quantidadeTotal}`

                    atualizarCarrinho()
                }

                })

                // Tornando a div, p e span filhos da nova DIV criada
                divItemCarrinho.appendChild(divNomeProduto);
                divItemCarrinho.appendChild(descricaoProduto);
                divItemCarrinho.appendChild(spanPrecoProduto);

                // Tornando os botões filhos da nova DIV Criada
                
                divControleDeQuantidade.appendChild(botaoAumentar);
                divControleDeQuantidade.appendChild(spanQuantidade)
                divControleDeQuantidade.appendChild(botaoDiminuir);
                divControleDeQuantidade.appendChild(botaoRemover);
                botaoRemover.appendChild(iconeRemover);
                
                // Conectando a nova DIV a div maior que é "itens-do-carrinho"
                itensDoCarrinhoDiv.appendChild(divItemCarrinho)
                // Conectando a div Controle de quantidades
                divItemCarrinho.appendChild(divControleDeQuantidade)
                
            })

            
        }
        
    }

    // FUNÇÃO ATUALIZAR CARRINHO
    function atualizarCarrinho() {
        mostrarItensDoCarrinho() // Garante que a lista de itens seja exibida e atualizada

        let valorTotalCarrinho = document.querySelector('#total-carrinho')
        let somaDoTotal = 0

        let totalItensCarrinho = 0

        itensCarrinho.forEach(function(item) {

        totalItensCarrinho = totalItensCarrinho + item.quantidade
        

        
        })

        contadorCarrinho.textContent = `${totalItensCarrinho}`

        


        itensCarrinho.forEach(function(item) {
            somaDoTotal = (item.produto.preco * item.quantidade) + somaDoTotal
            
        })

    


        let h3Total = valorTotalCarrinho.querySelector('h3');
            h3Total.textContent = `Total: R$ ${somaDoTotal.toFixed(2).replace('.',',')}`;
            h3Total.classList.add('precoCarrinhoTotal')

            
    }

    // FUNÇÃO EXIBIR DADOS

    const exibirModalDados = document.querySelector('#ModalDados')
    const btnFinalizar = document.getElementById('finalizar-compra')
    btnFinalizar.addEventListener('click', function() {
        exibirModalDados.style.display = 'block'
        modalCarrinho.style.display = 'none'
    })

    // FUNÇÃO BOTÃO VOLTAR

    const btnVoltar = document.getElementById('VoltarPedido')

    btnVoltar.addEventListener('click', function(event) {
        event.preventDefault();
        exibirModalDados.style.display = 'none'
        modalCarrinho.style.display = 'block'
    })


    // EVENTO BOTÃO FECHAR

    const botaoFecharPedido = document.querySelector('.close-button-dados')
    botaoFecharPedido.addEventListener('click', function() {
    exibirModalDados.style.display = 'none'
    document.body.style.overflow = 'auto'
})
    
  // FUNÇÃO FAZER PEDIDO
    const btnAvancar = document.getElementById('AvancarPedido')
    const exibirModalPedido = document.getElementById('ModalFazerPedido')
    const divPedido = document.getElementById('Pedido')
    const totalPreco = document.getElementById('ValorTotalPedidoFinal')
    const divItensListaPedido = document.getElementById('itensListadosNoPedido')
    let precoItens = 0

    btnAvancar.addEventListener('click', function() {
        exibirModalPedido.style.display = 'block'
        exibirModalDados.style.display = 'none'
        divItensListaPedido.textContent = ``
        precoItens = 0

        itensCarrinho.forEach(function(item) {
        let addPedido = document.createElement('li')
        addPedido.textContent = `Item: ${item.quantidade}x ${item.produto.nome} `
        divItensListaPedido.appendChild(addPedido)

        let addPreco = document.createElement('span')
        addPreco.textContent = ` Preço: R$ ${item.produto.preco.toFixed(2).replace('.', ',')}`
        divItensListaPedido.appendChild(addPreco)

        precoItens += item.produto.preco * item.quantidade

        
        
    })

        totalPreco.textContent = `R$ ${precoItens.toFixed(2).replace('.', ',')}`

    })

    const btnVoltarPedido = document.getElementById('voltarPedido')
        btnVoltarPedido.addEventListener('click', function() {
        exibirModalPedido.style.display = 'none'
        exibirModalDados.style.display = 'block'
    })

    const btnFecharPedido = document.querySelector('.close-button-pedido')
    btnFecharPedido.addEventListener('click', function() {
    exibirModalPedido.style.display = 'none'
    document.body.style.overflow = 'auto'
    })

    //FUNÇÃO TOPO (OPEN-CLOSE)
    let openClose = document.getElementById('open-close')
    let data = new Date()
    let hora = data.getHours()
    //let hora = 10

    function AbertoFechado() {
        if (hora >= 18  && hora < 24 ) {
            return true
        } else {
            return false
        }
    }

    function exibirOpenClose() {
        let ResultadoFuncao = AbertoFechado()

        if (ResultadoFuncao === true) {
            let p1 = document.createElement('p')
            p1.textContent = 'Aberto!'
            
            p1.style.color = `white`
            p1.style.backgroundColor = 'green'
            p1.style.padding = '5px'
            p1.style.margin = '5px'
            p1.style.borderRadius = '3px'
            openClose.appendChild(p1)
            

            let novoP = document.createElement('p')
            novoP.textContent = `Estamos funcionando!`
            openClose.appendChild(novoP)

        } else {

            let p2 = document.createElement('p2')
            p2.textContent = 'Fechado!'
            p2.classList.add('btn-fechado-horarios')

            p2.style.color = `white`
            p2.style.backgroundColor = 'rgb(158, 26, 24)'
            p2.style.padding = '5px'
            p2.style.margin = '5px'
            p2.style.borderRadius = '3px'
            openClose.appendChild(p2)

            let novoP2 = document.createElement('p')

            novoP2.textContent = `Horário de funcionamento: 18:00 - 23:59`
            novoP2.style.color = 'white'
            novoP2.style.backgroundColor = ``
            novoP2.style.padding = '2px'

            novoP2.classList.add('botao-horarios-P2')
            openClose.appendChild(novoP2)


            novoP2.addEventListener('click', function() {
            modalhorarios.style.display = 'block'
        })
        }

        let botaoFechar = document.querySelector('.close-button-horarios')
            botaoFechar.addEventListener('click', function() {
                modalhorarios.style.display = 'none'
            }) 
    }

    exibirOpenClose();



