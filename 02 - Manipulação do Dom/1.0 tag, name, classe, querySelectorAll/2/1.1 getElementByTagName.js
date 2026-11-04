/*

**O que é esse métodp getElementsByTagName()?

O método getElemetsByTagName é usado para selecionar todos os elementos de um documento que correspondem a um nome
de tag HTML especifico. Ele retorna uma coleção (semelhante a um array) de todos os elementos encontrados, mesmo que
seja apenas um. Para usar, você seleciona a tag por seu nome, por exemplo document.getElementByTagName("p") para obter
todos os elementos <p>, e acessar os elementos individuais usando o índice, como elementos[0] para o primeiro

Por exemplo, no código acima "const colecaoHTML=document.getElementsByTagName('div')" ia retornar uma html colection
de <div> e os elementos existentes nessas div.

*FUNÇÃO: Seleciona todos os elementos em um documento HTML que possuem uma tag específica
*RETORNO: Uma coleção viva de objetos *Element chamada HTMLCollection. Mesmo que haja apenas um, ainda é uma coleção
*Obs: getElementById=> retorna apenas um objeto e usado apenas uma vez, getElementByTagName=> retorna uma coleção de
elementos 


----------------------------------------------------------------------------------------------------------------------
**OBS**
Caso você não lembre de quais elementos é selecionado para retornar uma coleção, são elementos tags como por exemplo:
<div>, <h1>, <section>, <main>, <footer> etc
----------------------------------------------------------------------------------------------------------------------
**COMO USAR?**
Selecionar a Tag: Use o método no objeto document e passe o nome da tag como string (por exemplo, 'div', 'p', 'li')
Armazene a coleção: Guarde a coleção em uma variável, por exemplo => const colecaoHTML=document.getElementsByTagName('div')
Acesse elementos individualmente: Como o retorno é uma coleção, ele funciona como um array. Cada elemento possui um
índice, é necessário usar o índice com colchetes. O primeiro elemento é [0], o segundo é [1] e assim por diante.

   ***********************
// No exemplo abaixo será usado o getElementByTagName. Vai mostrar a diferença de getElementByTagName e getElementById
// e também como transformar o getElementByTagName em um array, pois um array possui leque maior de métodos do que um
// HTMLCollection
// ***********************


/*
Um HTMLCollection possui um leque menor de métodos que um Array porque, fundamentalmente, não é um Array. 
Ele é um objeto "semelhante a um array" (do inglês array-like) com propósitos e características diferentes. 

As principais razões para a diferença são:

.Natureza e finalidade: Um Array no JavaScript é uma estrutura de dados de propósito geral, projetada para armazenar e 
manipular coleções de qualquer tipo de dado. Um HTMLCollection, por outro lado, é uma interface de API da Web específica
do navegador, projetada para representar uma coleção dinâmica e em tempo real de elementos DOM em um documento HTML.

."Coleção em tempo real" (Live Collection): A principal característica de um HTMLCollection é que ele é "em tempo real". 
Isso significa que ele é automaticamente atualizado quando há alterações correspondentes na estrutura do DOM. Por exemplo,
e você adiciona ou remove um elemento HTML do documento, o HTMLCollection que contém esses elementos também será atualizado. 
Essa característica é diferente de um Array comum, que é estático.

.Desempenho e herança: Os métodos de Array como map(), filter() ou reduce() têm um impacto no desempenho e podem não ser 
ideais para a natureza "em tempo real" e de leitura do HTMLCollection. O HTMLCollection herda de uma interface base mais 
simples, e não do Array.prototype, o que significa que ele não herda esses métodos automaticamente.

.Compatibilidade histórica: O HTMLCollection tem sido parte das especificações da Web por muito tempo. Sua estrutura e 
comportamento são mantidos para compatibilidade com códigos mais antigos, mesmo que APIs mais modernas ofereçam alternativas
mais flexíveis (como o NodeList estático retornado por querySelectorAll). 

Como usar métodos de Array em um HTMLCollection
A forma mais comum e recomendada para ter acesso a todos os métodos de Array é primeiro converter o HTMLCollection para 
um Array puro. Você pode fazer isso de duas maneiras simples:

1. Usando Array.from()

-javascript

const collection = document.getElementsByClassName('minha-classe'); // Retorna um HTMLCollection
const array = Array.from(collection); // Converte para um Array

array.forEach(elemento => {
  // Você pode usar o forEach e todos os outros métodos de Array aqui
  console.log(elemento);
});

2. Usando o operador de propagação (Spread Operator)

-javascript
const collection = document.getElementsByTagName('div'); // Retorna um HTMLCollection
const array = [...collection]; // Converte para um Array usando o operador de propagação

const novoArray = array.map(div => {
  // Use métodos de Array como o map
  return div.id;
});
*/

// const dc1=document.getElementById('c1')
// const dc2=document.getElementById('c2')
// const dc3=document.getElementById('c3')
// const dc4=document.getElementById('c4')
// const dc5=document.getElementById('c5')
// const dc6=document.getElementById('c6')


// const arrayElementos=[dc1,dc2,dc3,dc4,dc5,dc6]

// const colecaoHTML=document.getElementsByTagName('div')

// No exemplo acima é mostrado a diferença entre o htmlcollection e uma array. Uma maneira de transformar um htmlcollection em uma
// array é usando o operador spread.

const dc1=document.getElementById('c1')
const dc2=document.getElementById('c2')
const dc3=document.getElementById('c3')
const dc4=document.getElementById('c4')
const dc5=document.getElementById('c5')
const dc6=document.getElementById('c6')


const arrayElementos=[dc1,dc2,dc3,dc4,dc5,dc6]

const colecaoHTML=[...document.getElementsByTagName('div')]

colecaoHTML.map((e) =>{
    console.log(e)
})



