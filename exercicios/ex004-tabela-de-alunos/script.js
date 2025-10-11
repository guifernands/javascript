const aluno = {
    nome: "Ana",
    notas: { prova1: 7.5, prova2: 8.0 },
    endereco: { cidade: "Porto Alegre", uf: "RS"}
};

// const { prova1, prova2 } = aluno.notas; extração das notas
const { cidade: cidadeAluno, uf = "XX" } = aluno.endereco; // muda o nome da cidade

function media({ notas: { prova1 = 0, prova2 = 0 } = {} } = {}) {
  return (prova1 + prova2) / 2;
}

console.log(media(aluno));