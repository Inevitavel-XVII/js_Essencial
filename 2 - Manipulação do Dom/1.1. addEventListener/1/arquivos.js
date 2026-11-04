//CÓDIGO 1  
// const c1= document.querySelector('#c1')
// const msg=()=>{
//     alert('clicou')
// }

// c1.addEventListener('click', (evt)=>{ // evt serve para que você saiba quem disparou o elemento.
//     console.log(evt.target) // target revela qual o elemento que disparou o elemento
//     msg()
// }) 
/*
Código 1: Quando você clica no elemento da página que tem o id c1, você dispara a mensagem 'clicou' na tela
*/
//------------------------------------------------------------------------------------------------------------------------------------------------
//CÓDIGO 2
// const c1= document.querySelector('#c1')
// const msg=()=>{
//     alert('clicou')
// }

// c1.addEventListener('click', (evt)=>{ // evt serve para que você saiba quem disparou o elemento.
//     const el= evt.target // target revela qual o elemento que disparou o elemento
//     el.classList.add("destaque") // .add() - adiciona uma classe em classList. // classList é uma lista de classes.
// }) 

/*
Código 2: Você está mudando a cor de um elemento, manipulando o css

'.classList' é uma lista de classes de um determinado elemento, não é um array comum e sim um objeto especial do DOM
chamado de DOMTokenList.

EXEMPLO:
<div id="c1" class="caixa azul grande"></div>
el.classList: ["caixa", "azul", "grande"] -> lista de classes

Esse método é parecido com um array, mas não é. Pois não possui todos os métodos de array igual ao ".map()"

O que é o DOMTokenList?
É um tipo de lista criada pelo navegador para guardar tokens(palavras separadas por espaço).
As classes CSS são exatamente isso: palavras separadas por espaços.

Por isso tem métodos própios:
Métodos // O que faz

.add("classe") // adiciona.
.remove("classe") // remove.
.toggle("classe") // adiciona se houver e remove se não houver.
.contains("classe") // verifica se existe.
*/
//------------------------------------------------------------------------------------------------------------------------------------------------
//CÓDIGO 3
const c1= document.querySelector('#c1')
const msg=()=>{
    alert('clicou')
}

c1.addEventListener('click', (evt)=>{ // evt serve para que você saiba quem disparou o elemento.
    const el= evt.target // target revela qual o elemento que disparou o elemento
    el.classList.add("destaque") // .add() - adiciona uma classe em classList. // classList é uma lista de classes.
}) 