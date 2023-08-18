const exercicio3 = () => {
    const usuario = {
        nome: 'Antony',
        idade: 22,
        email: 'antonybresolin1@gmail.com',
        endereco: {
            cidade: 'cidade dos bobos',
            estado: 'PR',
            pais: 'Brasil'
        }
    };

    const {nome, idade, email, endereco: {cidade, estado, pais}} = usuario; 


    console.log(usuario);
}