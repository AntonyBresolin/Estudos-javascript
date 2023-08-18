var perguntasIMC = () => {
    calcularIMC(prompt("Digite seu peso: "), prompt("Digite sua altura em cm: "));
}

function calcularIMC(peso, altura) {
    var IMC = peso / (altura * altura);

    var classificacao = classificarIMC(IMC);

    return alert("Seu IMC é de: "+ IMC.toFixed(2)+ " e sua classificação é: "+ classificacao +".")
}

function classificarIMC(IMC) {
    if(IMC < 18.5){
        return "Magreza";
    } else if(IMC >= 18.5 && IMC <= 24.9){
        return "Normal";
    } else if(IMC >= 25 && IMC <= 29.9){
        return "Sobrepeso";
    } else if(IMC >= 30 && IMC <= 39.9){
        return "Obesidade";
    } else if(IMC >= 40){
        return "Obesidade Grave";
    }
}