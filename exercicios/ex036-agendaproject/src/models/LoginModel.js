const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const loginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', loginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async registraUsuario() {
        this.validaUsuario();
        if(this.errors.length > 0) return;

        await this.userExists();

        if(this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        try {
            this.user = await LoginModel.create(this.body);
        }   catch(e) {
            console.log(e);
        }
    }

    async userExists() {
        const user = await LoginModel.findOne({ email: this.body.email });
        if(user) this.errors.push('Este usuário já existe.');
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
