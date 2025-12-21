class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // na Classe os métodos vão direto para o prototype
    falar() {
      console.log(`${this.nome} está falando`);  
    }
    comer() {
      console.log(`${this.nome} está comendo`);
    }
    beber() {
      console.log(`${this.nome} está bebendo`);
    }
}

// como seria para deixar uma func construtora igual uma Classe
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);  
}
Pessoa2.prototype.comendo = function() {
    console.log(`${this.nome} está falando`);  
}
Pessoa2.prototype.bebendo = function() {
    console.log(`${this.nome} está bebendo`);  
}

const p1 = new Pessoa('Gui', 'Fernandes');
const p2 = new Pessoa('Gui', 'Fernandes');

console.log(p1);
console.log(p2);