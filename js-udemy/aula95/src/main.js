import GeraCPF from './modules/GeraCPF';
import ValidaCPF from './modules/ValidaCPF';
import './assets/css/style.css';

(function() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.gera-cpf');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();