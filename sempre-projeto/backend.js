function criarMatrizInicial(linhas, colunas, posicaoBorda) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            if (j === posicaoBorda) {
                linha.push('BORDA');
            } else {
                linha.push(0);
            }
        }
        matriz.push(linha);
    }
    return matriz;
}

function redefinirMatriz(matrizInicial, posicaoBorda) {
    let novaMatriz = [];
    let colunasAntesBorda = posicaoBorda;
    let colunasAposBorda = matrizInicial[0].length - colunasAntesBorda - 1;
    let totalColunas = colunasAntesBorda + 1; // incluindo a borda

    for (let i = 0; i < matrizInicial.length; i++) {
        let linhaAtual = matrizInicial[i].slice(0, totalColunas);
        novaMatriz.push(linhaAtual);

        if (colunasAposBorda > colunasAntesBorda) {
            for (let j = 0; j < colunasAntesBorda; j++) {
                let novaLinha = new Array(colunasAntesBorda).fill(0);
                novaLinha.push('BORDA');
                novaMatriz.push(novaLinha);
            }
            colunasAposBorda -= colunasAntesBorda;
        } else {
            let novaLinha = new Array(colunasAposBorda).fill(0);
            novaLinha.push('x');
            novaLinha.push('BORDA');
            novaMatriz.push(novaLinha);
            colunasAposBorda = 0;
        }
    }

    return novaMatriz;
}

function identificarSegmentos(matrizFinal) {
    let segmentos = [];
    let segmentoAtual = [];
    for (let i = 0; i < matrizFinal.length; i++) {
        segmentoAtual.push(matrizFinal[i]);
        if (matrizFinal[i].includes('BORDA')) {
            segmentos.push(segmentoAtual);
            segmentoAtual = [];
        }
    }
    return segmentos;
}

// Exemplo de uso
let matrizInicial = criarMatrizInicial(4, 7, 2);
let matrizFinal = redefinirMatriz(matrizInicial, 2);
let segmentos = identificarSegmentos(matrizFinal);

console.log("Matriz Inicial:");
console.log(matrizInicial);
console.log("\nMatriz Final:");
console.log(matrizFinal);
console.log("\nSegmentos:");
segmentos.forEach((seg, idx) => {
    console.log(`Segmento ${String.fromCharCode(65 + idx)}`);
    console.log(seg);
});