const nova_tarefa = document.querySelector('.input-nova-tarefa');
const add_tarefa = document.querySelector('.btn-add-tarefa');
const lista_tarefas = document.querySelector('.tarefas');

// é usada após a adição de algo na lista para limpar a barra de texto
function limpaInput() {
    nova_tarefa.value = '';
    nova_tarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    li.appendChild(btnApagar)
;}

function criaLi() {
    const li = document.createElement('li')
    return li;
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    lista_tarefas.appendChild(li);
    criaBotaoApagar(li);
}

// permite adicionar itens na lista usando o ENTER
nova_tarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!nova_tarefa.value) return;
        criaTarefa(nova_tarefa.value);
        limpaInput();
        
    }
})

add_tarefa.addEventListener('click', function(e) {
    if (!nova_tarefa.value) return;
    criaTarefa(nova_tarefa.value);
    limpaInput();
}); // addEventLis. é obrigatório ter uma função no segundo parâmetro