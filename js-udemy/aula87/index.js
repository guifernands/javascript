// metodos uteis para promises
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
            reject('CAUGHT')
            return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

// Promise.all, Promise.race, Promise.resolve, Promise.reject

function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 2000);
    }
}

baixaPagina() 
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));