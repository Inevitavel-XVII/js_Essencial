const cursosTodos=[...document.getElementsByClassName("curso")]
const cursosC1=[...document.getElementsByClassName("c1")]
const cursosC2=[...document.getElementsByClassName("c2")]
const cursosEspecial=document.getElementsByClassName("curso")[4] // você está buscando elemento da posição 4 que faz parte
                                                                 // do htmlColection, que é criado usando o getElementsByClassName.

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursosEspecial)
 
cursosC2.map((el)=>{
  el.classList.add("destaque") // você adicionou a classe destaque nos elementos que possuem a classe "c2"
  // que está sendo manipulado por const ' cursosC2=[...document.getElementsByClassName("c2")] '
  //ou seja, o elemento !important se sobrepõem a outros elementos que possuem o mesmo valor.
})

/*
----------------------------------------------------------------------------------------------------------------------
Quando você usa um document.getElementsByClassName, você pode manipular todos os elementos que possuem o nome
da claase específicada.

EXEMPLOS: 
1.
  document.getElementsByClassName('nome da classe')
2.
 Se dentro da classe estiver escrito class="curso c1", o navegador vai interpretar class="curso", 'c1'.

----------------------------------------------------------------------------------------------------------------------
O método map aplicado na constante cursosC2 é para adicionar a classe destaque nos elementos que possuem a classe "c2".

O que é o classlist presente no método map?

Todo elemento HTML no DOM (por exemplo, um <div>, <p>, <button>, etc.) tem uma propriedade chamada classList.
Essa propriedade representa a lista de classes CSS aplicadas a esse elemento.
👉 Em outras palavras:
element.classList

é um objeto especial (do tipo DOMTokenList) que permite acessar, adicionar, remover ou alternar classes CSS de um elemento 
sem precisar mexer diretamente na string class.

🧰 2. Métodos úteis de classList
Método                              O que faz                                        Exemplo

.add("classe")                  Adiciona uma classe                             div.classList.add("ativo")

.remove("classe")                 Remove uma classe                             div.classList.remove("inativo")

.toggle("classe")   Adiciona se não existir, remove se já existir               div.classList.toggle("visivel")

.contains("classe")       Retorna true se o elemento tiver a classe             div.classList.contains("erro")

🧠 3. E o map?
O .map() não é parte do DOM, e sim um método de arrays.
No seu código, como você converteu o HTMLCollection em um array 
([...document.getElementsByClassName("c2")]), você pode usar .map() para percorrer cada elemento.
Dentro do .map(), o parâmetro el representa cada elemento HTML da lista.

🔍 Então, no seu código:
cursosC2.map((el) => {
  el.classList.add("destaque")
})

Aqui acontece o seguinte:


1. cursosC2 é um array de elementos HTML com a classe "c2".


2. .map() percorre cada um deles.


3. Para cada elemento (el), o código chama:
   el.classList.add("destaque")
 
  Ou seja: adiciona a classe "destaque" à lista de classes desse elemento.



💡 Exemplo visual
HTML:
<div class="curso c2">Curso 1</div>
<div class="curso c2">Curso 2</div>
<div class="curso c1">Curso 3</div>

JS:
const cursosC2 = [...document.getElementsByClassName("c2")]

cursosC2.map((el) => {
  el.classList.add("destaque")
})

Após rodar o código, os dois primeiros <div> passam a ter:
<div class="curso c2 destaque">Curso 1</div>
<div class="curso c2 destaque">Curso 2</div>
<div class="curso c1">Curso 3</div>

*/