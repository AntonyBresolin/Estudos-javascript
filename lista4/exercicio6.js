function exercicio6 () {
    const buttonCF = document.createElement("button");
    const buttonFC = document.createElement("button");
    const input = document.createElement("input");
    const h1 = document.createElement("h1");

    input.placeholder = "insira a temperatura";

    buttonCF.type = "button";
    buttonFC.type = "button";
    buttonCF.textContent = "CF"
    buttonFC.textContent = "FC"
    

    const conteudo = document.querySelector("div.conteudo");

    conteudo.appendChild(input);
    conteudo.appendChild(buttonCF);
    conteudo.appendChild(buttonFC);
    conteudo.appendChild(h1);
    conteudo.style.border = "solid 1px black"

    buttonCF.onclick = () => {
        h1.textContent = `${(Number(input.value)*1.8+32).toFixed(0)}`;
    }

    buttonFC.onclick = () => {
        h1.textContent = `${((Number(input.value)-32)/1.8).toFixed(3)}`;
    }
}