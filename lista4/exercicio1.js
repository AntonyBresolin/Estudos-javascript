function exercicio1() {
    var input = document.createElement("input");

    input.placeholder = "Informe seu nome";
    input.type = "text";
    var nome = document.createElement("h1");
    var button = document.createElement("button");
    button.textContent = "Enviar";
    button.onclick = function () {
        nome.textContent = input.value;
    }



    var conteudo = document.querySelector("div.conteudo");

    conteudo.appendChild(input);
    conteudo.appendChild(button);
    conteudo.appendChild(nome);
}



