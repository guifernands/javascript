function data(){
  const conteudo = document.querySelector('#conteudo');
  const valor = document.querySelector('#nasc').value; // "YYYY-MM-DD"
  if (!valor) {
    conteudo.innerHTML = '<li>Selecione uma data válida.</li>';
    return;
  }

  // --- Estação (pelo mês 1..12) ---
  const mesNum = Number(valor.slice(5,7));
  let estacao;
  if (mesNum === 12 || mesNum === 1 || mesNum === 2) estacao = 'Verão';
  else if (mesNum === 3 || mesNum === 4 || mesNum === 5) estacao = 'Outono';
  else if (mesNum === 6 || mesNum === 7 || mesNum === 8) estacao = 'Inverno';
  else estacao = 'Primavera';
  conteudo.innerHTML = `<li>A estação do seu aniversário é ${estacao}.</li>`;

  // --- Idade ---
  const hoje = new Date();
  const nascimento = new Date(valor + 'T00:00:00');
  let idade = hoje.getFullYear() - nascimento.getFullYear();

  // aniversário deste ano
  const aniverEsteAno = new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate());
  if (hoje < aniverEsteAno) idade--;

  conteudo.innerHTML += `<li>Você tem ${idade} anos e é ${idade >= 18 ? 'Maior' : 'Menor'} de idade.</li>`;

  // --- Próximo aniversário ---
  let proximo = aniverEsteAno;
  const hojeSemHora = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
  if (proximo < hojeSemHora) {
    proximo = new Date(hoje.getFullYear() + 1, nascimento.getMonth(), nascimento.getDate());
  }

  // --- switch do dia da semana ---
  let nomeDia;
  switch (proximo.getDay()) {
    case 0: nomeDia = 'Domingo'; break;
    case 1: nomeDia = 'Segunda'; break;
    case 2: nomeDia = 'Terça'; break;
    case 3: nomeDia = 'Quarta'; break;
    case 4: nomeDia = 'Quinta'; break;
    case 5: nomeDia = 'Sexta'; break;
    case 6: nomeDia = 'Sábado'; break;
    default: nomeDia = '';
  }

  conteudo.innerHTML += `<li>Próximo aniversário: <strong>${proximo.toLocaleDateString('pt-BR')}</strong> — <strong>${nomeDia}</strong>.</li>`;
}