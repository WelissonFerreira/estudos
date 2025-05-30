
/* Botão ver mais programado */ 
let vermais = document.querySelector('.vermais');

vermais.addEventListener('click', function(event) {
    event.preventDefault();

    let pai = event.target.parentElement
    let pegarconteudoextra = pai.nextElementSibling;
    
    if (pegarconteudoextra.style.display === 'none') {
        pegarconteudoextra.style.display = 'block';
        
    } else {
        pegarconteudoextra.style.display = 'none'
    }

})