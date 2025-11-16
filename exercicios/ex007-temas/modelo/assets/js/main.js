let tema = document.querySelector('.tema');
let btnTema = document.querySelector('.btnTema');
const STORAGE_KEY = 'tema';


// alterar tema
btnTema.addEventListener('click', function (e) {
    if (tema.style.backgroundColor === 'white' || tema.style.backgroundColor === '') {
        escurecer();
    }
    else {
        clarear();
    }
}); 

// tema claro
function clarear() {
    tema.style.backgroundColor = 'white';
    btnTema.innerText = '🌙';
    btnTema.style.backgroundColor = 'black';
    salvar('claro');
}

// tema escuro
function escurecer() {
    tema.style.backgroundColor = 'black';
    btnTema.innerText = '☀️';
    btnTema.style.backgroundColor = 'white';
    salvar('escuro');
}

function salvar(valorDoTema) {
    localStorage.setItem(STORAGE_KEY, valorDoTema);
}

function carregar() {
    const temaSalvo = localStorage.getItem(STORAGE_KEY);
    if (temaSalvo === 'escuro') {
        escurecer();
    } 
    else {
        clarear();
    }
}
carregar();