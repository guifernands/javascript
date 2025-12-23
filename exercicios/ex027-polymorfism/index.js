function criaNotificacaoEmail(emailDestino) { 
    return {
        enviar() {
            console.log(`Enviando e-mail para ${emailDestino}`);
        }
    };
}

function criaNotificacaoSMS(numeroCelular) {
    return {
        enviar() {
            console.log(`Enviando SMS para ${numeroCelular}`);
        }
    };
}

const notificacoes = [ 
    criaNotificacaoEmail('joaogamer321@hotmail.com'),
    criaNotificacaoEmail('welingtonmatador@outlook.com.br'),
    criaNotificacaoSMS('51 99372-3215'),
    criaNotificacaoSMS('41 99912-9012')
];

for(const notificacao of notificacoes) {
    notificacao.enviar(); // polimorfismo aqui. ele sabe que a função tem um método enviar e envia, mesmo elas sendo diferentes, uau
}