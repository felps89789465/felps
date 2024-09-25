const avanca = document.querySelectorAll('.btn-proximo');
const voltar = document.querySelectorAll('.btn-voltar');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});

voltar.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const passoAnterior = 'passo-' + this.getAttribute('data-voltar');

        atual.classList.remove('ativo');
        document.getElementById(passoAnterior).classList.add('ativo');
    });
});
