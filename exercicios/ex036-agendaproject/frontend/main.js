import 'core-js/stable';

import 'regenerator-runtime/runtime';

import Login from './modules/Login'; // está vermelho mas está certo

import Contato from './modules/Contato';

const cadastroContato = new Contato('.form-contato');
const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();
cadastroContato.init();

/* import './assets/css/style.css'; */
