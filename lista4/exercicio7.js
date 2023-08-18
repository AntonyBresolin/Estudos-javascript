function exercicio7 (){
    const input = document.createElement("input");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");

    input.placeholder = "digite o número de caracteres";
    button.textContent = "Gerar senha";
    button.type = "button";

    const conteudo = document.querySelector("div.conteudo");
    conteudo.appendChild(input);
    conteudo.appendChild(button);
    conteudo.appendChild(h1);


    button.onclick = () => {
        const senha = gerarSenhaAleatoria(Number(input.value));
        h1.textContent = `A senha gerada foi `+ senha;
    }
}

function gerarSenhaAleatoria (numeroCaracteres){
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()";
    var senha = "";

    for(var i = 0; i < numeroCaracteres; i++){
        senha += caracteres.charAt(parseInt(Math.random()*73));
    }
    return senha;
}