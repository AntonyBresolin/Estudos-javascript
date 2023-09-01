const titulo = document.createElement('h1');
titulo.innerText = "Verificador de dispositivo usado";
const conteudo = document.createElement('div');
const button = document.createElement('button');


button.innerText = "Verificar dispositivo";
button.onclick = () => {
    var p = document.createElement('p');
    conteudo.innerText = ""
    if (navigator.userAgent.match("Android")) {
        p.innerText = "Você está usando um dispositivo Android!";
    } else if (navigator.userAgent.match("iPhone")) {
        p.innerText = "Você está usando um dispositivo iPhone!";
    } else if (navigator.userAgent.match("Windows")) {
        p.innerText = "Você está usando um dispositivo Windows!";
    } else if (navigator.userAgent.match("Linux")) {
        p.innerText = "Você está usando um dispositivo Linux!";
    } else if (navigator.userAgent.match("Mac")) {
        p.innerText = "Você está usando um dispositivo Mac!";
    } else {
        p.innerText = "Você está usando um dispositivo desconhecido!";
    }
    conteudo.appendChild(p);
}

document.body.appendChild(titulo)
document.body.appendChild(button);
document.body.appendChild(conteudo);
