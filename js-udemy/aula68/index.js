// retorne a soma do dobro de todos os pares
// -> filtrar pares
// -> dobrar valores
// -> reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
console.log(numeros);

const numerosPares = numeros.filter(valor => valor % 2 == 0);
console.log(numerosPares);

const dobrarNumeros = numerosPares.map(valor => valor * 2);
console.log(dobrarNumeros);

const somaNumeros = dobrarNumeros.reduce((acumulador, valor) => acumulador += valor, 0);
console.log(somaNumeros);