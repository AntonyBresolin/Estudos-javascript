
window.onload = () => {
    var p = document.createElement('p');
    p.innerText = ""
    if (navigator.language == "pt-BR") {
        p.innerText = "Bem vindo ao site!"
    } else if (navigator.language == "en-US") {
        p.innerText = "Welcome to the website!"
    } else {
        p.innerText = "Error!"
    }
    document.body.appendChild(p);
}

