// declaração de função (function hoisting)
falaOi();
function falaOi() {
    console.log('oie');
}

// first-class objects (objetos de primeira classe)
// function expression
const souUmDado = function() {
    console.log('sou um dado')
};
souUmDado();

function executaFuncao(funcao) {
    console.log('executando sua funcão abaixo:');
    funcao();
}
executaFuncao(souUmDado)

// arrow function
const funcaoArrow = () => {
    console.log('sou uma arrow function')
}
funcaoArrow();

// function dentro de um objeto
const obj = {
    falar: function() {
        console.log('estou falando...(de dreto do objeto)')
    }
};
obj.falar();