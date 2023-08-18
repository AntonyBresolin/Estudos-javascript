function pergunta(){
    var dado = prompt("Transformar celcius em fahrenheit ou fahrenheit em celcius? (C/F)");
    if(dado == "C" || dado == "c"){
        celciusToFahrenheit();
    }else if(dado == "F" || dado == "f"){
        fahrenheitToCelcius();
    }else{
        alert("Opção inválida!");
    }
}


function celciusToFahrenheit(){
    var celcius = prompt("Digite a temperatura em celcius: ");
    var fahrenheit = (celcius * 1.8) + 32;
    alert("A temperatura em fahrenheit é: "+fahrenheit.toFixed(2));
}

function fahrenheitToCelcius(){
    var fahrenheit = prompt("Digite a temperatura em fahrenheit: ");
    var celcius = (fahrenheit - 32) / 1.8;
    alert("A temperatura em celcius é: "+celcius.toFixed(2));
}