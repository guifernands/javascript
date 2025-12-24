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
        // Valida os Campos primeiro
        // passa por todos itens do array informacoes
        for(const info of informacoes) {
            // todos campos precisam estar preeenchidos
            if(info.valor === '') return console.log('Todos campos devem estar preenchidos.');

            // sem espaços
            if(info.valor.includes(' ')) return console.log('Espaços não são permitidos nos campos.');

            if(info.input.classList.contains('nome')) {
                this.validaNome(info);
            }
            if(info.input.classList.contains('sobrenome')) {
                this.validaSobrenome(info);
            }
            if(info.input.classList.contains('')) {
                
            }
            if(info.input.classList.contains('')) {
                
            }
            if(info.input.classList.contains('')) {
                
            }
            if(info.input.classList.contains('')) {
                
            }
        }
    }

    validaNome(info) {
        if(/\d/.test(info.valor)) return console.log('Nome: Digite apenas letras.');
        
        if(info.valor.length < 3) return console.log('Nome: Minímo de 3 caracteres.')
        
        console.log(`${info.valor} é um nome válido.`);
    }

    validaSobrenome(info) {
        if(/\d/.test(info.valor)) return console.log('Sobrenome: Digite apenas letras.');
        
        if(info.valor.length < 3) return console.log('Sobrenome: Minímo de 3 caracteres.')
        
        console.log(`${info.valor} é um sobrenome válido.`);
    }
}  
