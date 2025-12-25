const enviar = document.querySelector('.enviar');

enviar.addEventListener('click', function(e) {
    const inputNome = document.querySelector('.nome');
    const inputSobrenome = document.querySelector('.sobrenome');
    const inputCpf = document.querySelector('.cpf');
    const inputUsuario = document.querySelector('.usuario');
    const inputSenha1 = document.querySelector('.senha1');
    const inputSenha2 = document.querySelector('.senha2');

    // valores e inputs dos campos
    e.preventDefault();
    const informacoes = [
        { input: inputNome, valor:inputNome.value },
        { input: inputSobrenome, valor: inputSobrenome.value },
        { input: inputCpf, valor: inputCpf.value },
        { input: inputUsuario, valor: inputUsuario.value },
        { input: inputSenha1, valor: inputSenha1.value },
        { input: inputSenha2, valor: inputSenha2.value }
    ];

    e = new ValidaCadastro(informacoes);
});

// classe onde vai validar campo por campo
class ValidaCadastro {  
    constructor(informacoes) {
        this.informacoes = informacoes;
        // Valida os Campos primeiro
        // passa por todos itens do array informacoes
        for(const info of informacoes) {
            // todos campos precisam estar preeenchidos
            if(info.valor === '') return console.log('Todos campos devem estar preenchidos.');

            // sem espaços
            if(info.valor.includes(' ')) return console.log('Espaços não são permitidos nos campos.');

            // ativa o valida de acordo com a classe 
            if(info.input.classList.contains('nome')) {
                this.validaNome(info);
            }
            if(info.input.classList.contains('sobrenome')) {
                this.validaSobrenome(info);
            }
            if(info.input.classList.contains('cpf')) {
                this.validaCPF(info);
            }
            if(info.input.classList.contains('usuario')) {
                this.validaUsuario(info);
            }
            if(info.input.classList.contains('senha1', 'senha2')) {
                this.validaSenha(info);
            }
        }
    }

    validaNome(info) {
        if(/\d/.test(info.valor)) return console.log('Nome: Digite apenas letras.');
        
        if(info.valor.length < 3) return console.log('Nome: Minímo de 3 caracteres.');
        
        console.log(`Nome: ${info.valor} é um nome válido.`);
    }

    validaSobrenome(info) {
        if(/\d/.test(info.valor)) return console.log('Sobrenome: Digite apenas letras.');
        
        if(info.valor.length < 3) return console.log('Sobrenome: Minímo de 3 caracteres.');
        
        console.log(`Sobrenome: ${info.valor} é um sobrenome válido.`);
    }

    validaCPF(info) {
        if(info.valor.length !== 11) return console.log('CPF: O CPF deve conter 11 caracteres.');

        console.log(`CPF: ${info.valor} é um CPF válido.`);
    }

    validaUsuario(info) {
        if(info.valor.length < 3 || info.valor.length > 12) return console.log('Usuario: O usuário deve conter entre 3 e 12 caracteres.');

        if(/[^a-zA-Z0-9]/.test(info.valor)) return console.log('Usuario: Use apenas letras e números.');

        console.log(`Usuario: ${info.valor} é um usuário válido.`);
    }

    validaSenha(info) {
        if(info.input.classList.contains('senha1')) {
            if(info.valor.length < 6 || info.valor.length > 12) return console.log('Senha 1: A senha precisa ter entre 6 e 12 caracteres.');

            const senha1 = info.valor;
            console.log(`Senha 1: Senha válida.`);
        }


        

        

    }

    
}  
