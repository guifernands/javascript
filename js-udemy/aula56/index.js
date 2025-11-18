// Factory function 
// Constructor function

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto = 'falando sobre gatos') {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2); 
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Guilherme', 'Fernandes', 1.78, 65);
const p2 = criaPessoa('Ana Luiza', 'Rodrigues', 1.40, 25);
const p3 = criaPessoa('Cláudia', 'Rejane Ferreira', 1.68, 90);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);