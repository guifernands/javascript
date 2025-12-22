const jogadores = [
    {id: 1, nome: 'Guilherme'},
    {id: 2, nome: 'Flávia'},
    {id: 3, nome: 'Roberto'}
]

// obj Map
const sessoesAtivas = new Map();

// laço para adicionar tudo no Map
for(const jogador of jogadores) {
    const {id} = jogador; // o "{id}" com as chaves é pra fazer a desestruturação e armazenar o id de dentro do objeto "jogador"
    sessoesAtivas.set(id, {...jogador});
}
console.log(sessoesAtivas);