// Factory function 
// Constructor function

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2); 
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Gui', 'Fernandes', 1.78, 65);
console.log(p1.imc());
const p2 = criaPessoa('Cláudia', 'Fernandes', 1,68, 70);
console.log(p2.imc());
console.log(p1.fala('falando sobre JS'));