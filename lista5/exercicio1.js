async function exercicio1(){   
    try {
        await fazerRequisicao();
    } catch (error) {
        console.error("Erro ao fazer a requisição:", error);
    }
}

async function fazerRequisicao(){
    var result = await fetch("https://run.mocky.io/v3/e9af78d3-7828-4018-9d6c-f397c7726fa6", {
        method: "get"
    })

    if(!result.ok){
        throw new Error("Erro na resposta da API");
    }

    var json = await result.json();

    await apresentarDados(json);
    
}

function apresentarDados(json){
    json.previsao.forEach(element => {
        var dia = element.dia;
        var temperatura = element.temperatura;
        var imagem = element.imagem;

        var h1 = document.createElement("h1");
        var p = document.createElement("p");
        var img = document.createElement("img");

        h1.textContent = dia;
        p.textContent = temperatura;
        img.src = imagem;

        img.style.width = "100px"

        const conteudo = document.querySelector(".conteudo");

        conteudo.appendChild(h1);
        conteudo.appendChild(p);
        conteudo.appendChild(img);
    });
}