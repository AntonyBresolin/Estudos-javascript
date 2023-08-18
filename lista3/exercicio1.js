const chamadaIntrodutoria = () => {
    retornoChamada(prompt("Digite seu nome: "), prompt("Digite sua idade: "));
}

function retornoChamada(nome, idade){
    console.log(`Olá, ${nome}, você tem ${idade} anos.`);
}
