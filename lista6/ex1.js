const titulo = document.createElement('h1');
titulo.innerText = "Verificador de Internet";
const conteudo = document.createElement('div');
const button = document.createElement('button');


button.innerText = "Verificar conexão";
button.onclick = () => {
    var p = document.createElement('p');
    conteudo.innerText = ""
    if (navigator.onLine) {
        p.innerText = "Você está conectado!";
    } else {
        p.innerText = "Você não está conectado!";
    }
    conteudo.appendChild(p);
}

document.body.appendChild(titulo)
document.body.appendChild(button);
document.body.appendChild(conteudo);
