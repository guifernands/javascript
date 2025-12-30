async function buscarUsuario(id) {
    if(typeof id !== 'number') return console.log('[ERRO] O valor tem que ser um número.');
    try {
        // tente isso, caso dê problema jogue para o catch
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        // o .ok retorna retorna um booleano de acordo com a resposta, se for entre 200-299 retorna true, de 400-599 false
        if(resposta.ok) {
            const dados = await resposta.json();
            console.log(dados.name);
        }
        else {
            // joga para o catch
            throw new Error();
        }
    }
    catch(e) {
        console.log('Caiu no catch');
    }
}

buscarUsuario(5000);