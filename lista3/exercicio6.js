const arraySemDuplicadas = () => {
    let array = [1,2,2,8,4,3,4,5,6,7,8];


    const resultado = array.filter((value, index, array) => {
        return array.indexOf(value) === index;
    }
    );
    console.log(resultado);
}