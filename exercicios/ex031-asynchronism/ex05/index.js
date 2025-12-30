async function listarNomes() {
    try {
        // fetch busca o arquivo (array com 10 usuarios)
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');

        // converte para json
        const usuarios = await resposta.json();

        // se for a busca for um sucesso mostra apenas os nomes dos usuarios do array de objetos
        if(resposta.ok) {
            const usuariosNomes = usuarios.map(obj => obj.name);
            console.log(usuariosNomes);
        }
        // se não for... joga pro catch
        else {
            throw new Error();
        }
    }

    catch(e) {
        console.log('Caiu no catch!')
    }
}

listarNomes();