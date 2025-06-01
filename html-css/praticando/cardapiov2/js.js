
/* Botão ver mais programado */ 




// 2. Variável para TODOS os botões "Ver mais"
let btnAbriModal = document.querySelectorAll('.botaomodal');


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
        });
    })

})
 // Configurando botão do carrinnho para o contador do carrinho
let btnCarrinhoContador = document.querySelectorAll('.AdicionarCarrinho')
let contadorCarrinho = document.querySelector('.contcarrinho')
let ValorCarrinho = 0

btnCarrinhoContador.forEach(function(botaoCarrinho) {
    botaoCarrinho.addEventListener('click', function() {
        
        
        ValorCarrinho = ValorCarrinho + 1
        contadorCarrinho.textContent = ValorCarrinho
    })
})

