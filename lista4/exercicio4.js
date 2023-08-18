function exercicio4 () {
    const input = document.createElement("input");
    const button = document.createElement("button");
    const a = document.createElement("a");
    const h1 = document.createElement("h1");

    input.placeholder = "informe o raio de um cículo";

    button.textContent = "Aperta aqui";
    button.type = "button"

    a.href = "https://pt.khanacademy.org/math/basic-geo/x7fa91416:circles-cylinders-cones-and-spheres/x7fa91416:area-and-circumference-of-circles/v/area-of-a-circle#:~:text=A%20%C3%A1rea%20de%20um%20c%C3%ADrculo,souber%20a%20medida%20do%20di%C3%A2metro."
    a.textContent = "veja mais";

    

    const conteudo = document.querySelector("div.conteudo");
    conteudo.appendChild(input);
    conteudo.appendChild(button);

    button.onclick = () =>{
        var raio = Number(input.value);
        h1.textContent= `A área do circulo é = ${3.14 * Math.pow(raio, 2)} para saber mais sobre aperte em `
        h1.appendChild(a);
        conteudo.appendChild(h1)
    }
}