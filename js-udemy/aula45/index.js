// Teste de finally, catch e try
function erro() {
    try {
        console.log(a);
        console.log('Abri um arquivo');
        console.log('Manipulei o arquivo');
        console.log('Fechei o arquivo');
    }   catch (e) {
        // é executado quando há erros
        console.log('catch: Tratando o erro');
    }   finally {
        // é executado sempre
        console.log('finally: sempre sou executado');
    }
}

// nsei ainda
function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        console.log('Não é');
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

try {
    const data = new Date('01-01-1970 12:58')
    const hora = retornaHora(11);
    console.log(hora);
}   catch (e) {
    // tratar erro
}   finally {
    console.log('Tenha um bom dia.')
}
