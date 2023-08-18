function exercicio5 () {
   const button = document.createElement("button")
   const h1 = document.createElement("h1")
   
   button.textContent = "Girar dado";
   button.type = "button";

   button.onclick = () => {
    h1.textContent = `${parseInt(Math.random()*6+1)}`
   }

   const conteudo = document.querySelector("div.conteudo");
   conteudo.appendChild(button);
   conteudo.appendChild(h1);
}