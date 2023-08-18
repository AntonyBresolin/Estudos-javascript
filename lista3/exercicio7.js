const todosPares =() => {
    var array = [2,6,7,8,5,9,12];

    var resultado = array.filter((value, index, array) => {
        return value % 2 === 0;
    }
    );

    if(resultado.length === array.length){
        console.log("Todos os elementos são pares");
    } else {
        console.log("Existem elementos ímpares");
    }
}