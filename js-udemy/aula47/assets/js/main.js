const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer; // guardando o interval aqui

// formatação da data
function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000); // converte os ms em segs
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'UTC' // 00:00:00 ou 'UTC'
    });
}

// faz a contagem dos segundos
function iniciaRelogio() { 
    timer = setInterval(function() { 
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos) // pega a função criaH. e conta os segundos usando a formatação dela
    }, 1000);
}

// observa se o usuário clica no botão para ativar a função
iniciar.addEventListener('click', function (event) {
    clearInterval(timer); // limpa o intervalo antes de adicionar um novo (evita vários intervalos ao mesmo tempo)
    iniciaRelogio();
    relogio.style.color = 'black'; 
});

// observa se o usuário clica no botão para ativar a função
pausar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.style.color = 'red';
});

// observa se o usuário clica no botão para ativar a função
zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    segundos = 0; // reseta o timer
    relogio.innerHTML = '00:00:00'; // reseta o texto 
    relogio.style.color = 'black';
});