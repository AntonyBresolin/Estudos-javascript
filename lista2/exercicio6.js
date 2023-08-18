var perguntarSenha = () => {
    validarForcaSenha(prompt("Digite a senha: "));
}

function validarForcaSenha(senha){
    var letraMaiuscula = false;
    var numero = false;
    var caracterEspecial = false;

    for(var i = 0; i < senha.length; i++){
        if(senha.charAt(i) >= 'A' && senha.charAt(i) <= 'Z'){
            letraMaiuscula = true;
        }else if(senha.charAt(i) >= '0' && senha.charAt(i) <= '9'){
            numero = true;
        }else if(senha.charAt(i) == '@' || senha.charAt(i) == '#' || senha.charAt(i) == '$'){
            caracterEspecial = true;
        }
    }
    if(letraMaiuscula === true && numero === true && caracterEspecial === true){
        alert("Senha forte!");
    } else{
        alert("Senha fraca!");
    }
}