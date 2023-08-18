const consumirMap = () => {
    const map = new Map();
    map.set('nome', 'Antony');
    map.set('idade', 22);
    map.set('profissao', 'Programador');

    map.set('nome1', 'Pedro');
    map.set('idade1', 19);
    map.set('profissao2', 'Agricultor');

    for(const [key, value] of map.entries()){
        console.log(key, value);
    }

}