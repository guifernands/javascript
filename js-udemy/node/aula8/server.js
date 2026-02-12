const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }) );

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">    
            <button>Enviar<button>
        </form>
    `);
});

app.get('/profiles/:idUsuarios', (req, res) => {
    // /profiles/3
    // /profiles/?chave1=valor1&chave2=valor2%vhave3=valor3
    
    console.log(req.params);
    res.send(req.params.idUsuarios);
});

app.post('/', (req, res) => {
    res.send(`Você enviou: ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000')
});