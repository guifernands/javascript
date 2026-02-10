const express = require('express');
const app = express();

// CRUD -> Create, Read, Update, Delete
//         Post    Get   Put     Delete

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">    
            <button>Enviar<button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o fomulário')
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosco!');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000')
});