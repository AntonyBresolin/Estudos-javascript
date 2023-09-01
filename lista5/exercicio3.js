function exercicio3() {
    const lista = document.createElement("ol");
    document.querySelector(".conteudo").appendChild(lista);

    const buttonCarregarLista = document.createElement("button");
    const buttonNovoElemento = document.createElement("button");
    const tarefa = document.createElement("input");


    buttonCarregarLista.textContent = "Carregar lista";
    buttonNovoElemento.textContent = "Novo elemento";
    buttonCarregarLista.type = "button";
    buttonNovoElemento.type = "button";

    tarefa.type = "text";
    tarefa.placeholder = "Insira um novo dado"
    tarefa.id = "tarefa";


    const conteudo = document.querySelector(".conteudo");
    conteudo.appendChild(tarefa);
    conteudo.appendChild(buttonCarregarLista);
    conteudo.appendChild(buttonNovoElemento);


    buttonCarregarLista.onclick = () => {
        const tarefaSalva = JSON.parse(localStorage.getItem('tarefas')) || [];
        limparLista(lista);
        tarefaSalva.forEach(tarefa => {
            adicionarTarefaNaLista(tarefa, lista);
        });
    };

    buttonNovoElemento.onclick = () => {
        adicionarTarefa();
    };
}

function adicionarTarefa() {
    const tarefa = document.getElementById('tarefa').value;

    if (tarefa) {
        const lista = document.querySelector(".conteudo ol");
        adicionarTarefaNaLista(tarefa, lista);

        const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
        tarefasSalvas.push(tarefa);
        localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));

        document.getElementById('tarefa').value = '';
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
}

function adicionarTarefaNaLista(tarefa, lista) {
    const itemLista = document.createElement('li');
    itemLista.textContent = tarefa;
    lista.appendChild(itemLista);
}

function limparLista(lista) {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}