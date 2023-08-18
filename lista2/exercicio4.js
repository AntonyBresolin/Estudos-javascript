function perguntaQuantidadeCaracteres(){
    gerarSenha(prompt("Digite a quantidade de caracteres que deseja: "));
}

function gerarSenha(quantidade){
    var senha = "";
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(var i = 0; i < quantidade; i++){
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    alert("A senha gerada foi: "+ senha);
}