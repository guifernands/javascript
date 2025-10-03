function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];


    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        const contador = pessoas.length
        resultado.innerHTML += `Pessoa ${contador}: ${nome.value} ${sobrenome.value}, ${peso.value} kgs e ${altura.value} de altura. <br>`

        console.log(pessoas)
    }
    
    

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo()