async function buscarUsuario() {
    // fetch precisa de dois awaits, o primeiro para pegar a resposta bruta 
    // e o segundo para para converter a resposta bruta em JSON
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const dados = await resposta.json();
    console.log(dados.name);
}

buscarUsuario();