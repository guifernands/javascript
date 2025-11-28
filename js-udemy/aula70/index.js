/* const pessoa1 = new Object();
pessoa1.nome = 'Gui';
pessoa1.sobrenome = 'Fernandes';
pessoa1.idade = 20;
pessoa1.falarNome = () => {
    console.log(`${this.nome} está falando seu nome.`)
}
pessoa1.getDataNascimento = function() { // functions dentro de objetos são métodos
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
    console.log(chave);
} */


// factory functions / constructor functions / classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // return this;
}

// {} <- this -> this
const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Gabriela', 'Fernandes');
console.log(p1,p2);

p2.nome = 'Luiz';