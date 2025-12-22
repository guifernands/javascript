function criaJogador(nome) {
    const identificador = {};
    return Object.defineProperties(identificador, {
        id: {
            value: 1,               // recomendado declarar aqui
            writable: false,        // sem overwrite
            configurable: false,    // não pode ser deletado
            enumerable: true        // aparece no console
        },

        nome: {
            value: nome,
            writable: true,
            configurable: true,
            enumerable: true    
        }
    });
}

const jogador = criaJogador('Gui');
console.log(jogador);
jogador.id = 2;             // falha
console.log(jogador);
jogador.nome = 'Isabela';   // funciona
console.log(jogador);