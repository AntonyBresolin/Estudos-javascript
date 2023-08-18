function exercicio1(){
    var nome = prompt("Digite seu nome: ");
    alert("Olá " + nome + "!");
}
function exercicio2(){
    var bold = "font-weight: bold;"
    var numero1 = prompt("Digite um número: ");
    var numero2 = prompt("Digite outro número: ");
    var resultado = parseInt(numero1)+parseInt(numero2);
    console.info(numero1+" + "+numero2+" = %c", bold, resultado);
}
function exercicio3(){
    
    var numero = prompt("Digite um número: ");
    alert("O dobro do numero digitado é:"+(parseInt(numero)*2));
}
function exercicio4(){
    var raioCirculo = prompt("Digite o raio do círculo: ");
    var areaCirculo = Math.PI * Math.pow(raioCirculo, 2);
    console.info("A área do círculo é: "+areaCirculo);
    console.info("https://pt.khanacademy.org/math/basic-geo/x7fa91416:circles-cylinders-cones-and-spheres/x7fa91416:area-and-circumference-of-circles/v/area-of-a-circle#:~:text=A%20%C3%A1rea%20de%20um%20c%C3%ADrculo,souber%20a%20medida%20do%20di%C3%A2metro")
}
function exercicio5(){
    var dolares = prompt("Digite o valor em dólares: ");
    converterDolar(dolares);
}
function converterDolar(dolar){
    var real = dolar * 4.73;
    alert("O valor em real é: "+real.toFixed(2));
}