// Catálogo de todos os produtos disponíveis
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

// FUNÇÃO BOTÃO VER MAIS
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
// Para cada botão de adicionar ao carrinho, adicione um 'click listener'
// FUNÇÃO CONTADOR DO CARRINHO E ADICIONAR PRODUTO NO CARRINHO
btnCarrinhoContador.forEach(function(botaoCarrinho) {
    botaoCarrinho.addEventListener('click', function() {
        
        // Incrementa o valor do contador do carrinho
        valorCarrinho = valorCarrinho + 1
        // Atualiza o texto exibido no contador do carrinho
        contadorCarrinho.textContent = valorCarrinho
        
        // BLOCO IMPORTANTE: PEGA O PRODUTO NOS DADOS DOS OBJETOS CRIADOS

        // Pega o ID único do produto a partir do atributo 'data-produto-id' do botão clicado
        let seletorDoCarrinho = botaoCarrinho.dataset.produtoId; //
        
        // Usa o ID para encontrar e obter o objeto completo do produto no 'catalogoDeProdutos'
        let produtoSelecionado = catalogoDeProdutos[seletorDoCarrinho]; 

        itensCarrinho.push(produtoSelecionado)

        // CHAMANDO FUNÇÃO EXIBIR ITENS DO CARRINHO
        atualizarCarrinho()

        // Opcional: Loga o array do carrinho no console para ver os itens adicionados
        console.log(itensCarrinho);

    })
})


// FUNÇÃO ABRIR CARRINHO
let abrirCarrinho = document.querySelector('#botaoCarrinho')
let modalCarrinho = document.querySelector("#ModalCarrinho")
let fecharCarrinho = document.querySelector('.close-button-carrinho')

    abrirCarrinho.addEventListener('click', function(event) {
        event.preventDefault();

        modalCarrinho.style.display = 'block'

        // CHAMANDO FUNÇÃO EXIBIR ITENS DO CARRINHO
        atualizarCarrinho()

    })

    // FUNÇÃO FECHAR CARRINHO
    fecharCarrinho.addEventListener('click', function() {
        modalCarrinho.style.display = 'none'
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
                // Criando DIV e pegando nome do produto
                let divNomeProduto = document.createElement('div')
                itensDoCarrinhoDiv.appendChild(divNomeProduto)
                divNomeProduto.textContent = item.nome

                let spanPrecoProduto = document.createElement('span')
                itensDoCarrinhoDiv.appendChild(spanPrecoProduto)
                spanPrecoProduto.textContent = `${item.preco.toFixed(2).replace('.',',')}`;
            })
        }
    }

    // FUNÇÃO ATUALIZAR CARRINHO
    function atualizarCarrinho() {
        mostrarItensDoCarrinho() // Garante que a lista de itens seja exibida e atualizada

        let valorTotalCarrinho = document.querySelector('#total-carrinho')
        let somaDoTotal = 0
        itensCarrinho.forEach(function(item) {
            somaDoTotal = item.preco + somaDoTotal
            
        })

        let h3Total = valorTotalCarrinho.querySelector('h3');
            h3Total.textContent = `Total: R$ ${somaDoTotal.toFixed(2).replace('.',',')}`;
    }
    
    

    