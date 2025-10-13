/* 
for clássico - geralmente com iteráveis (arrays strings)
for in - retorna o índice ou chave (string, array ou objetos)
for of - retorna o valor em si (iteráveis, arrays ou strings)
 */

const nome = 'Guilherme Fernandes';

/* for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
} */

/* for (let i in nome) {
    console.log(nome[i]);
} */

for (let valor of nome) {
    console.log(valor);
}