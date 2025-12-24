const enviar = document.querySelector('.enviar');

enviar.addEventListener('click', function(e) {
    const inputNome = document.querySelector('.nome');
    const inputSobrenome = document.querySelector('.sobrenome');
    const inputCpf = document.querySelector('.cpf');
    const inputUsuario = document.querySelector('.usuario');
    const inputSenha1 = document.querySelector('.senha1');
    const inputSenha2 = document.querySelector('.senha2');

    // valores dos campos
    e.preventDefault();
    const info = [
        inputNome.value,
        inputSobrenome.value,
        inputCpf.value,
        inputUsuario.value,
        inputSenha1.value,
        inputSenha2.value
    ];

    e = new ValidaCadastro(info);
});

// classe onde vai validar campo por campo
class ValidaCadastro {  
    constructor(info) {
        console.log(info)
    }
}
