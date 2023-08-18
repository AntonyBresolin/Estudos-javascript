const perguntaNomeNota = () => {
    const nome = prompt("Digite o nome do aluno");
    const nota = prompt("Digite a primeira nota do aluno");
    const nota2 = prompt("Digite a segunda nota do aluno");
    const nota3 = prompt("Digite a terceira nota do aluno");

    console.log(`${nome}, suas notas foram ${nota}, ${nota2}, ${nota3} e teve média ${media(parseInt(nota), parseInt(nota2), parseInt(nota3))}}`);

}

const media = (nota, nota2, nota3) => {
    return (nota + nota2 + nota3) / 3;
}