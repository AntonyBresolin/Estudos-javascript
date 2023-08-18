var listaDeCompras = () => {
    var lista = new Set();
    while(true){
        var item = prompt("Digite o item que deseja adicionar à lista de compras ou tecle T para sair: ");
        if(item == "T" || item == "t"){
            break;
        }
        lista.add(item);
    }
    
    for (const item of lista) {
        console.log(item);
      }
}