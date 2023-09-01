async function exercicio2() {
    await fazerRequisicao();
}

async function fazerRequisicao() {
    var result = await fetch("https://run.mocky.io/v3/c4122529-4044-4cd7-a741-d6ae00affdb2", {
        method: "get"
    })

    var json = await result.json()

    await imprimirDados(json);
}

function imprimirDados(json) {
    var conteudo = document.querySelector(".conteudo");
    json.noticia.forEach(element => {
        var h1 = document.createElement("h1");
        var img = document.createElement("img");
        var p = document.createElement("p")

        h1.textContent = element.titulo;
        img.src = element.imagem;
        p.textContent = element.conteudo

        img.style.width = "800px";



        conteudo.appendChild(h1);
        conteudo.appendChild(img);
        conteudo.appendChild(p);
    });
}