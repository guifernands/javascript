const express = require('express');
const app = express();

// middleware nativo para ler json
app.use(express.json());

// "banco de dados"
let jogos = [
    { id: 1, titulo: "Dark Souls", genero: "Souls-like" },
    { id: 2, titulo: "Don't Starve", genero: "Survival" },
    { id: 3, titulo: "Counter-Strike", genero: "FPS" }
];

app.get('/jogos', (req, res) => {
    // aqui usamos o status 200 (ok) e devolvemos o array em formato json
    res.status(200).json(jogos);
});

app.post('/jogos', (req, res) => {
    // o que foi enviado de fora
    const dadosRecebidos = req.body;

    const novoJogo = {
        id: jogos.length + 1,
        titulo: dadosRecebidos.titulo,
        genero: dadosRecebidos.genero
    }

    //adicionado ao "banco de dados"
    jogos.push(novoJogo);

    // mostra o jogo novo que foi salvo
    res.status(201).json(novoJogo);
});

// iniciando o servidor / "fica ouvindo" requisições na porta 3000 do computador
app.listen(3000, () => {
    console.log("Servidor rodando!");
    console.log("Acessar http://localhost:3000")
});

// usar esse código no terminal para atualizar toda vez que o código muda!
// node --watch index.js