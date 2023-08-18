

const exercicio11 = () => {
    const Retangulo = {
        largura: Number(prompt("Digite a largura do retângulo: ")),
        altura: Number(prompt("Digite a altura do retângulo: ")),
        calcularArea: function() {
            return this.largura * this.altura;
        }
    }
    alert(`A área do retângulo é ${Retangulo.calcularArea()}`);
}