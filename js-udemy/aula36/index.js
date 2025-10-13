// For in --> lê os índices ou chaves dos objeto

const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Fernandes',
    idade: 20,
    altura: 1.78
};

for (let chave in pessoa) {
//  console.log(pessoa['nome']);
    console.log(chave, pessoa[chave]);
} 

