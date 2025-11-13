const nova_tarefa = document.querySelector('.input-nova-tarefa');
const add_tarefa = document.querySelector('.btn-add-tarefa');
const lista_tarefas = document.querySelector('.tarefas');

// é usada após a adição de algo na lista para limpar a barra de texto
function limpaInput() {
    nova_tarefa.value = '';
    nova_tarefa.focus();
}

// cria o botão de apagar ao lado da nova tarefa
function criaBotaoApagar(li) {
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    // apaga uma tarefa com o click no botão apagar
    btnApagar.addEventListener('click', function(e) {
        li.remove();
        salvar();
    })
    btnApagar.innerText = 'Apagar';
    li.appendChild(btnApagar);
}

// cria a tag da tarefa
function criaLi() {
    const li = document.createElement('li')
    return li;
}

// cria a tarefa
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    lista_tarefas.appendChild(li);
    criaBotaoApagar(li);
    salvar();
}

// permite adicionar itens na lista usando o ENTER
nova_tarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!nova_tarefa.value) return;
        criaTarefa(nova_tarefa.value);
        limpaInput();      
    }
})

// adiciona a tarefa através do click no button
add_tarefa.addEventListener('click', function(e) {
    if (!nova_tarefa.value) return;
    criaTarefa(nova_tarefa.value);
    limpaInput();
}); // addEventLis. é obrigatório ter uma função no segundo parâmetro

// salva as tarefas
function salvar() {
    const liTarefas = lista_tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('lista_tarefas', tarefasJSON)
}

// carrega as tarefas salvas anteriormente
function carregaTarefasSalvas() {
    const tarefas = localStorage.getItem('lista_tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
carregaTarefasSalvas();