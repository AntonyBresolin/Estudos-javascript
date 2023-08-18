const contaBancaria = {
    saldo: 0,
    depositar: (valor) => {
        if (valor >= 0) {
            contaBancaria.saldo += valor;
        } else {
            alert("Valor inválido!");
        }
    },
    sacar: (valor) => {
        if (valor > contaBancaria.saldo || valor < 0) {
            alert("Saldo insuficiente!");
            return;
        }
        contaBancaria.saldo -= valor;
    },
    imprimirSaldo: () => {
        alert(`Seu saldo é: ${(contaBancaria.saldo).toFixed(2)}`);
    }
}


const contaBancariaPergunta = () => {
    var operacao = prompt("Digite a operação: \n1 - Depositar\n2 - Sacar\n3 - Imprimir saldo\n4 - Sair");

    while (operacao != '4') {
        switch (operacao) {
            case "1":
                var valor = parseFloat(prompt("Digite o valor a ser depositado: "));
                contaBancaria.depositar(valor);
                break;
            case "2":
                var valor = parseFloat(prompt("Digite o valor a ser sacado: "));
                contaBancaria.sacar(valor);
                break;
            case "3":
                contaBancaria.imprimirSaldo();
                break;
            default:
                alert("Operação inválida!");
                break;
        }
        operacao = prompt("Digite a operação: \n1 - Depositar\n2 - Sacar\n3 - Imprimir saldo\n4 - Sair");
    }
}