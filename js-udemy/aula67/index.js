// reduce
/* const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 !== 0) { 
        acumulador += valor
    }
    return acumulador;
}, 0); 

console.log(total); // soma do array todo
*/


// retornar pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 3200 },
    { nome: 'Wallace', idade: 611 },
];
const maisVelho = pessoas.reduce(function(acumulador, obj) {   
    if (acumulador.idade > obj.idade) { 
        return acumulador;
    } else {
        return obj;
    }
});
console.log(maisVelho);