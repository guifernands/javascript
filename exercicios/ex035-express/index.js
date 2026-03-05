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

// escrever códigos aqui

// iniciando o servidor / "fica ouvindo" requisições na porta 3000 do computador
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!");
});