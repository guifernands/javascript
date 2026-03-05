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

app.put('/jogos', (req, res) => {
    res.status(200).json(jogos);
});

app.put('/jogos/:id', async (req, res) => {
    const idUrl = Number(req.params.id);

    const indexDoJogo = jogos.findIndex(idJogo => idJogo.id === idUrl)

    if(indexDoJogo === -1) {
        res.status(404).json({ erro: "[ERRO] Jogo não encontrado" })
    }
    
    else {
        await simularEsperaDoBanco();

        jogos[indexDoJogo] = { 
            // mantem o mesmo id do jogo anterior
            id: jogos[indexDoJogo].id,
            titulo: req.body.titulo,
            genero: req.body.genero
        }

        res.status(200).json(jogos[indexDoJogo]);
    }
});

function simularEsperaDoBanco() {
    return new Promise(resolve => setTimeout(resolve, 2000));
}

// iniciando o servidor / "fica ouvindo" requisições na porta 3000 do computador
app.listen(3000, () => {
    console.log("Servidor rodando!");
    console.log("Acessar http://localhost:3000")
});

// usar esse código no terminal para atualizar toda vez que o código muda!
// node --watch index.js