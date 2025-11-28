// Filter -> sempre vai retornar um array, com a mesma quantidade de elementos ou menos.

// funcão super otimizada de filter para filtrar array
/* const numeros = [5, 10, 20, 7, 11, 0, 100, 1000, -4, 26, 9];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados); */

// filtrando os números sem o Filter
/* const numeros_copia = [...numeros];

function maiorQueDez() {
    let numerosMaior = [];
    for (let temp = 0; temp < numeros.length; temp++) {
        if (numeros_copia[temp] > 10) {
            numerosMaior.push(numeros_copia[temp]);
            console.log(numerosMaior);
        }
    }
}
maiorQueDez(); */

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// retorna array de pessoas com o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

// retorna array de pessoas com mais de 50 anos
const pessoasMaisVelhas = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasMaisVelhas);

// retorna array de pessoas que o nome termina com A
const nomeTerminaComA = pessoas.filter(obj => obj.nome.endsWith('a'));
console.log(nomeTerminaComA);
