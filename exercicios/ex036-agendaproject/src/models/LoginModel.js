const mongoose = require('mongoose');
const validator = require('validator');

const loginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    senha: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', loginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    registraUsuario() {
        this.validaUsuario();
        if(this.errors.length > 0) return;
    }

    validaUsuario() {
        this.cleanUp();

        // validação
        // o email precisa ser válido
        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido.');
        // a senha precisa ter entre 7-20 caracteres
        if(this.body.password.length < 7 || this.body.password.length > 20) this.errors.push('A senha precisa ter entre 7-20 caracteres.');
    }

    cleanUp() {
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
        
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login;
