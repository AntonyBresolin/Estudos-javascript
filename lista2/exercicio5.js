var perguntaPalavra = () => {
    contadorVogal(prompt("Digite uma palavra"));
}

function contadorVogal(palavra){
    var vogais = 0;
    for (var i = 0; i < palavra.length; i++){
        if(palavra.charAt(i) == "a" || palavra.charAt(i) == "e" || palavra.charAt(i) == "i" || palavra.charAt(i) == "o" || palavra.charAt(i) == "u"){
            vogais++;
        }
    }
    console.log("A palavra "+palavra+" possui "+vogais+" vogais.");
}