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

app.get('/jogos', (req, res) => {
    if (req.query.genero) {
        const lista = jogos.filter(jogo => jogo.genero === req.query.genero);
        res.status(201).json(lista);
    } 
    else {
        res.status(200).json(jogos);
    }
});

// iniciando o servidor / "fica ouvindo" requisições na porta 3000 do computador
app.listen(3000, () => {
    console.log("Servidor rodando!");
    console.log("Acessar http://localhost:3000")
});

// usar esse código no terminal para atualizar toda vez que o código muda!
// node --watch index.js