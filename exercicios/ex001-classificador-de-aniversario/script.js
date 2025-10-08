function data(){
    const conteudo = document.querySelector('#conteudo');
    let nascimento = document.querySelector('#nasc').value;
    mes = Number(nascimento.slice(5,7)); // slice pega o mês
    console.log(mes)
    
    if (mes === 12 || mes === 1 || mes === 2) {
        estacao = 'Verão'; }
        else if (mes === 3 || mes === 4 || mes === 5) {
        estacao = 'Outono';}
        else if (mes === 6 || mes === 7 || mes === 8) { estacao = 'Inverno'; }
    else { estacao = 'Primavera'; }
    conteudo.innerHTML = `<li>A estação do seu aniversário é ${estacao}.<li>`;
}