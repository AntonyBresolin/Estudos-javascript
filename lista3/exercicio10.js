const chamarExercicio10 = () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = ["a", "b", "c", "d", "e"];

    console.log(juntarArrays(array1, array2));
}

const juntarArrays = (array1, array2) => {
    const mapa = new Map();
    for (let i = 0; i < array1.length; i++) {
        mapa.set(array1[i], array2[i]);
    }
    return mapa;
}




