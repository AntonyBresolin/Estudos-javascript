const calculadoraPergunta = () => {
    let a = parseInt(prompt("Digite o primeiro número: "));
    let b = parseInt(prompt("Digite o segundo número: "));
    let operacao = prompt("Digite a operação: \n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão");
    let resultado = 0;
    switch (operacao) {
        case "1":
            resultado = calculadora.adicao(a, b);
            break;
        case "2":
            resultado = calculadora.subtracao(a, b);
            break;
        case "3":
            resultado = calculadora.multiplicacao(a, b);
            break;
        case "4":
            resultado = calculadora.divisao(a, b);
            break;
        default:
            alert("Operação inválida!");
            return;
    }
    alert(`O resultado da operação é: ${resultado}`);
}

const calculadora = {
    adicao: (a, b) => {
        return a + b;
    },
    subtracao: (a, b) => {
        return a - b;
    },
    multiplicacao: (a, b) => {
        return a * b;
    },
    divisao: (a, b) => {
        return a / b;
    }
}