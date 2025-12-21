// propriedade privada
const _velocidade = Symbol('velocidade')

// class usando getter e setter
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        console.log('SETTER');
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        console.log('GETTER');
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return; // velocidade máxima
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Gallardo');

/* for (let i = 0; i<= 200; i++) {
    c1.acelerar();
} */

c1.velocidade = 99;
console.log(c1[_velocidade]);