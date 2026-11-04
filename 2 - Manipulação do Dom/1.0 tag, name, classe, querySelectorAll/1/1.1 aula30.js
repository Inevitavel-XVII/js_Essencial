const dc1=document.getElementById('c1')
const dc2=document.getElementById('c2')
const dc3=document.getElementById('c3')
const dc4=document.getElementById('c4')
const dc5=document.getElementById('c5')
const dc6=document.getElementById('c6')

console.log(dc1) // imprimir o elemento em si
console.log(dc1.id) // imprimir o "id" do elemento
console.log(dc1.innerHTML) // imprimir o innerHTML


const arrayElementos=[dc1,dc2,dc3,dc4,dc5,dc6]

// for (d of arrayElementos){
//     d.innerHTML='CFB Cursos'
// }

arrayElementos.map((e)=>{
    e.innerHTML='CFB Cursos'
    console.log(e)
}) // Nesse laço, usando o método map, você consegue transformar todos os elementos do array para 'CFB Cursos'  


// Quais são as funções de manipulação do Dom em JS?
// Como funciona o document.getElementById ?
// O que é o innerHTML?
// O que é esse elemento id?

/*
******O que é o elemento ID?********

O atributo "id" no html define um identificador único para o elemento em um documento. Ele pode ser estilizado
através do css e manipulado através do JavaScript. Ele é um seletor exclusivo, podendo ser usado apenas uma vez
por toda à página (ou seja, ele não pode ser usado por vários elementos).

******O que é o innerHTML?********
É a propiedade de um elemento HTML que define ou retorna o conteúdo HTML interno desse elemento. É usado para
manipular o DOM, permitindo mudar o conteúdo de uma tag por outro, incluindo HTML e texto. É importante ter
cuidado ao usar o innerHTML como entrada de usuário, pois isso pode levar a vunerabilidades de segurança se
o valor não for higienizado devidademente.

******Como funciona o document.getElementByid?********
O document.getElementByid () é uma função JavaScript que encontra um único elemento HTML em uma página web, usando
seu atributo id exclusivo. Ele retorna um objeto que representa o seu elemento encontrado, o qual pode ser manipulado
com JavaScript, como alterar seu conteúdo ou o seu estilo. Se algum elemento com id especificado e não é encontrado, a 
função retorna null.
*/