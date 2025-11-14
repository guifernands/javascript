let numRand = document.querySelector('.n_rand');

// número aleatório de 1 - 100
numRand.innerHTML = Math.floor(Math.random() * 100) + 1;

// estilo pelo js
let tamNum = 40;
numRand.style.userSelect = 'none';
tamanhoNum();
// função pra economizar linhas
function tamanhoNum() {
    numRand.style.fontSize = tamNum + 'px';
}

// tira o select dos botões
function userSelectBotao(botao) {
    botao.style.userSelect = 'none';
}

// botão mais, coloca o botão mais antes da tag
const btnMais = document.createElement('button');
userSelectBotao(btnMais);
btnMais.innerText = '+';
numRand.insertAdjacentElement('beforebegin', btnMais);

// botão menos, coloca o botão depois da tag
const btnMenos = document.createElement('button');
userSelectBotao(btnMenos);
btnMenos.innerText = '-';
numRand.insertAdjacentElement('afterend', btnMenos);

// quando clica no btnMenos diminui o tamanho do número
btnMais.addEventListener('click', function(e) {
    tamNum = tamNum + 5;
    tamanhoNum();
});

// quando clica no btnMenos diminui o tamanho do número
btnMenos.addEventListener('click', function(e) {
    tamNum = tamNum - 5;
    tamanhoNum();
});
