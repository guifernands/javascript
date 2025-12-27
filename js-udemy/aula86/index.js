// promises
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') reject('Valor deve conter apenas letras.')
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1, 3))
.then(
    resposta => {
        console.log(resposta);
        return esperaAi(1207, rand(1, 3));
    }
)
.then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 3', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
})
.catch(e => {
    console.log('[ERRO]:', e);
});

// usando callbacks para executar na ordem (mta gambiarra)
/* function esperaAi(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, tempo);
}

esperaAi('Frase 1', rand(1, 3), function() {
    esperaAi('Frase 2', rand(1, 3), function() {
        esperaAi('Frase 3', rand(1, 3));
    });
}); */

