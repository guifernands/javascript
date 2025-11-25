// valor por referência
//                0          1         2 
const nomes = ['Alan', 'Fátima', 'Rafael'];
const novo = [...nomes];

let removido = novo.pop(); // remove do final

removido = novo.shift(); // remove do início

nomes.push('Bárbara'); // adiciona no final



console.log(nomes);
console.log(novo);
console.log(nomes.length + ' length não é a mesma coisa que índice');
console.log(nomes.slice(0, 2));
console.log(nomes.join(' ._. '));