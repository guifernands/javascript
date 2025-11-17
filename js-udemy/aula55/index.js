// IIFE -> Immediately Invoked Function Expression
(function(idade, peso, altura) {
    const sobrenome = 'Fernandes';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Guilherme'));
    }

    falaNome();
})(30, 80, 1.80);
