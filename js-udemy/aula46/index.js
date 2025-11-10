function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoDoInterval() {
    console.log(mostraHora());
}

// fica repetindo tal coisa conforme passa o tempo (nesse caso 1000 ms)
const timer = setInterval(() => console.log(mostraHora()), 1000);

// da um "break" no Interval depois de 6000 ms
setTimeout(() => clearTimeout(timer), 6000);

// aparece só depois de 8000 ms
setTimeout(() => console.log('abacaxi'), 8000)