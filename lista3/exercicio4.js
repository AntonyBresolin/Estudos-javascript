const somaArray = () => {
    let array = [1,2,3,4,5,6,7,8];

   const resultado = array.reduce((previous, current, index, array) => {
    return previous + current;
   }, 0);

   console.log(resultado);
}