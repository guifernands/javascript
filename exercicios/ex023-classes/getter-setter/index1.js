const _preco = Symbol('preco');

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco; // o setter ja ativa na criação
    }

    get preco() {
        console.log('GETTER');
        console.log(this[_preco]);
        return this[_preco];
    }
    set preco(novoPreco) {
        console.log('SETTER');
        if(novoPreco <= 0 || typeof novoPreco !== 'number') return console.log('[ERRO]');
        this[_preco] = novoPreco;
        console.log(`Preço atualizado: R$${this[_preco]}.`);
    }
}

const p1 = new Produto('Caneta', 3);
p1.preco = 'adad';
p1.preco;
p1.preco = -20
p1.preco;
p1.preco = 20;
p1.preco;