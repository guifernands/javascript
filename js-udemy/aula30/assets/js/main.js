let data_texto = document.querySelector('.container h1');
const data_baguncada = new Date();

const data = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full', // deixa a frase completinha
    timeStyle: 'short', // no horário mostra as horas e os minutos apenas
    timeZone: 'America/Sao_Paulo' // pega o fuso do navegador/servidor
}).format(data_baguncada);

data_texto.innerHTML = data.toString(); // data no HTML