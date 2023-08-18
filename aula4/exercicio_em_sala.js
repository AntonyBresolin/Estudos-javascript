/*
    Usuario informe um numero
    Clicar em somar
    Quando ele clicar em somar, solicitar mais numeros
    Até o momento que o usuário não quiser intormar mais
    Realizar a soma, e mostrar o resultado em tela
*/

var valores = [];

var input = document.createElement("input");
input.placeholder = "Informe um número";
input.type = "number";

var botaoSomar = document.createElement("button");
botaoSomar.innerText = "Somar";
botaoSomar.onclick = () => {
    valores.push(Number(input.value));
    input.value = '';
}

var botaoTotal = document.createElement("button");
botaoTotal.innerText = "Total";
botaoTotal.onclick = () => {
    var soma = valores.reduce((anterior, atual) => {
        return anterior + atual;
    }, 0);

    var resultadoSoma = document.createElement("h1");
    resultadoSoma.innerText = "O total foi: " + soma;

    conteudo.innerHTML = '';
    conteudo.appendChild(resultadoSoma);
}

var conteudo = document.querySelector("div#conteudo");
conteudo.appendChild(input);
conteudo.appendChild(botaoSomar);
conteudo.appendChild(botaoTotal);