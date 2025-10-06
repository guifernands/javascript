const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Fernandes',
    idade: 20,
    endereco: {
        rua:'Rua Gaivotas',
        numero: 14
    }
};

const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto)