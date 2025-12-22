const jogadores = [
    {id: 1, nome: 'Guilherme'},
    {id: 2, nome: 'Flávia'},
    {id: 3, nome: 'Zoe'},
    {id: 4, nome: 'Roberto'}
]

// obj Map
const sessoesAtivas = new Map();

// laço para adicionar tudo no Map
for(const jogador of jogadores) {
    const {id} = jogador; // o "{id}" com as chaves é pra fazer a desestruturação e armazenar o id de dentro do objeto "jogador"

    sessoesAtivas.set(id, {...jogador}); // ...spread operator para "espalhar" todas propriedades do objeto na cópia
}

console.log(sessoesAtivas.has(5), ' | tem o id 5');
console.log(sessoesAtivas.delete(2), ' | delete o id 2');
console.log(sessoesAtivas.size, ' | tamanho do obj Map, tipo um length');
