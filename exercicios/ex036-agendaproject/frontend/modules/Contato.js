export default class Contato {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        this.limpaErros();

        if(!nomeInput.value) {
            this.criaErro(nomeInput, 'Nome é um campo obrigatório');
            error = true;
        }

        if(!emailInput.value && !telefoneInput.value) {
            if(!emailInput.value) {
                this.criaErro(emailInput, 'Pelo menos um campo de contato deve ser preenchido');
            }

            if(!telefoneInput.value) {
                this.criaErro(telefoneInput, 'Pelo menos um campo de contato deve ser preenchido');
            }

            error = true;
        }

        if(!error) {
            HTMLFormElement.prototype.submit.call(el);
        }
    }

    criaErro(campo, msg) {
        const small = document.createElement('small');
        small.innerHTML = msg;
        small.classList.add('error-text-animated', 'error-text');
        campo.insertAdjacentElement('afterend', small);
    }

    limpaErros() {
        for(let errorText of this.form.querySelectorAll('.error-text')) errorText.remove();
    }
}