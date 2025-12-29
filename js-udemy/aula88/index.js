// async e await
// gera um numero para simular uma delay real
function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min));
}

function esperaAi(msg, tempo)  {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // se não é string cai no erro
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}
/* 
esperaAi('Promise 1', rand())
    .then(valor => {
        console.log(valor);
        return esperaAi('Promise 2', rand());
    })
    .then(promise => {
        console.log(promise);
        return esperaAi('Promise 3', rand());
    })
    .then(promise => {
        console.log(promise);
        return promise;
    })
    .then(promise => {
        console.log('Terminamos na promise: ', promise);
    })
    .catch(e => console.log(e)); */

async function exe() {
    try {
        const promise1 = await esperaAi('Promise 1', rand());
        console.log(promise1);

        setTimeout(function() {
            console.log('Essa promise estava pendente', promise1)
        }, 1100);

        const promise2 = await esperaAi('Promise 2', rand());
        console.log(promise2);

        const promise3 = await esperaAi('Promise 3', rand());
        console.log(promise3);

        console.log('Terminamos na promise: ', promise3);
    }
    catch(e) {
        console.log(e);
    }
}

exe();

// estados da promise
// pending -> pendente
// fullfilled -> resolvida
// rejected -> rejeitada