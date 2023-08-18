var calcularMedia = () => {
    var contador = 0;
    var soma = 0;
    var numero = 0;
    while(true){
        numero = prompt("Digite um número ou tecle T para sair: ");
        if(numero == "T" || numero == "t"){
            break;
        }
        soma = soma + parseFloat(numero);
        contador++;
    }
    console.log("A média dos números digitados é: "+(soma/contador));
}
