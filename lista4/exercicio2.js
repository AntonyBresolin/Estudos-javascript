function exercicio2() {
    var form = document.createElement("form");
    var input1 = document.createElement("input");
    var input2 = document.createElement("input");
    var button = document.createElement("button");
    var h1 = document.createElement("h1");

    input1.placeholder = "numero 1";
    input2.placeholder = "numero 2";

    button.textContent = "aperte aqui";
    button.type = "button";

    form.setAttribute("id", "formulario");

    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(button);
    form.appendChild(h1);

    var conteudo = document.querySelector("div.conteudo");

    conteudo.appendChild(form);

    button.onclick = function () {
        var num1 = Number(input1.value);
        var num2 = Number(input2.value);
        h1.textContent = `${num1} + ${num2} = ${num1 + num2}`;
    }

}


