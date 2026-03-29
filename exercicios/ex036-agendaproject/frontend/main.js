import 'core-js/stable';

import 'regenerator-runtime/runtime';

import Login from './modules/Login'; // está vermelho mas está certo

import Contato from './modules/Contato';

import './assets/css/style.css';

// trocar de tema
const btnSwitch = document.querySelector('#theme-switch');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  btnSwitch.innerHTML = '☀️ Modo Claro';
}

btnSwitch.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    btnSwitch.innerHTML = '🌙 Modo Escuro';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    btnSwitch.innerHTML = '☀️ Modo Claro';
    localStorage.setItem('theme', 'dark');
  }
});

// forms
const cadastroContato = new Contato('.form-contato');
const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

login.init();
cadastro.init();
cadastroContato.init();
