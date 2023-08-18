function exercicio3() {
    const input = document.createElement("input");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");

    input.placeholder = "informe um número";

    button.textContent = "Aperte aqui";
    button.type = "button"

    button.onclick = () => {
        var numero = Number(input.value);
        h1.textContent = `O dobro do número é = ${numero*2}`;
    }

    const conteudo = document.querySelector("div.conteudo");

    conteudo.appendChild(input);
    conteudo.appendChild(button);
    conteudo.appendChild(h1);
}