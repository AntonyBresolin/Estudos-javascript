const chamadaContador9 = () => {
    const frase = prompt("Digite uma frase: ");
    const ocorrenciaPalavra = contadorDePalavras(frase);

    console.log(ocorrenciaPalavra);
}

function contadorDePalavras(frase) {
    const fraseArrumada = frase.match(/\b\w+\b/g);
    const mapa = new Map();

    if (fraseArrumada) {
        for (const palavra of fraseArrumada) {
            const contador = mapa.get(palavra) || 0;
            mapa.set(palavra, contador + 1);
        }
    }

    return mapa;
}

