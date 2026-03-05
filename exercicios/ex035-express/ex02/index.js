const express = require('express');
const app = express();

// Middleware nativo para ler JSON
app.use(express.json());

// "banco de dados"
let jogos = [
    { id: 1, titulo: "Dark Souls", genero: "Souls-like" },
    { id: 2, titulo: "Don't Starve", genero: "Survival" },
    { id: 3, titulo: "Counter-Strike", genero: "FPS" }
];

// "id" na url é uma variavel dinamica
app.get('/jogos/:id', (req, res) => {
    const idJogo = Number(req.params.id);

    const jogoSelecionado = jogos.find(jogo => jogo.id === idJogo);

    res.status(200).json(jogoSelecionado);
});

app.delete('/jogos/:id', (req, res) => {
    const idJogo = Number(req.params.id);

    // Lógica: "Mantenha o jogo SE o ID dele for DIFERENTE do idJogo"
    jogos = jogos.filter(jogo => jogo.id !== idJogo);

    res.status(204).send();
});

// iniciando o servidor / "fica ouvindo" requisições na porta 3000 do computador
app.listen(3000, () => {
    console.log("Servidor rodando!");
    console.log("Acessar http://localhost:3000")
});

// usar esse código no terminal para atualizar toda vez que o código muda!
// node --watch index.js