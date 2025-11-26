//                -5        -4         -3       -2        -1
//                 0         1          2        3         4
const nomes = ['Marina', 'Isadora', 'Eduarda', 'Duda', 'Júlia'];
 

// explicação
// nomes.splice(índice'atual, delete, elem1, elem2, elem3);

// pop
// const removidos = nomes.splice(-1, 1);

// push
// nomes.splice(nomes.length, 0, 'Guilherme', 'Fernandes', 'Rodrigues');

// unshift
// nomes.splice(0, 0, 'Guilherme', 'Fernandes')

const removidos = nomes.splice(3, 2, 'Evelyn');
console.log(nomes, removidos);