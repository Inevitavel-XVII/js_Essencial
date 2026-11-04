/*
Nesse arquivo de estudo você vai estar aprendendo sobre as relações dos elementos dentro do DOM, abordando sobre conceitos como parent,
child, siblins e etc.

O que é o DOM?
É uma representação da sua página html como uma árvore de elementos.

<div id="pai">
  <p id="filho1">Parágrafo 1</p>
  <p id="filho2">Parágrafo 2</p>
</div>

1.Parent(pai)
É o elemento que contém outros elementos dentro dele

Como acessar o pai?

const filho=document.querySelector("#filho1")
console.log(filho.parentElement)

2.Child(filhos)
Os child são elementos dentro de um elemento pai

Como acessar os filhos?

const pai = document.querySelector('#pai')
console.log(pai.children)
console.log(pai.children[0]) // aqui você também pode acessar por índice ----- primeiro filho

3.Siblins(irmãos)
São elementos que contém o mesmo pai

Como navegar por irmãos?
const filho1 = document.querySelector('#filho1')
// próximo irmão
console.log(filho1.nextElementSibling)
// irmão anterior
console.log(filho1.previousElementSibling)


Relação	                              Propriedade

Pai	                                  parentElement

Filhos	                              children

Primeiro filho	                      firstElementChild

Último filho	                      lastElementChild

Próximo irmão	                      nextElementSibling

Irmão anterior	                      previousElementSibling




------------------------------------------------------------------------------------------------------------------------------------------
Aula 1:

Código 1:

const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]

console.log(btn_c[0].getRootNode())
console.log(btn_c[0].ownerDocument())


// console.log(caixa1.children[0])
// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)

o que é ownerDocument()? => Ele é uma propiedade do DOM que retorna, como valor, o object document que criou aquele elemento
o que é getRootNode()?
------------------------------------------------------------------------------------------------------------------------------------------
Aula 2:

código 1

const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]

console.log(caixa1.hasChildNodes()) // método hasChildNodes retorna true se houver filhos dentro do elemento. Se não houver, será false.
console.log(btn_c[0].hasChildNodes()) // tá verificando o elemento da posição zero. O resultado é true porque text é um child do elemento.
console.log(btn_c[0].childNodes) // childNodes retorna um nodeList
console.log(btn_c[0].children) // retorna os elementos que estão presentes dentro de btn_c
console.log(caixa1.children.length > 0 ? "Possui Filhos": "Não possui filhos")
console.log(btn_c[0].children.length > 0 ? "Possui Filhos": "Não possui filhos")
console.log(caixa1.firstElementChild.innerHTML="TESTE") // você está adicionando no primeiro elemento a string "TESTE" e imrimindo no console o resultado
console.log(caixa1.children[0].innerHTML="TESTE") // você está mudando a string de algum elemento, mas você escolhe qual elemento vai mudar

Na linha 121, você está manipulando o text presente dentro do primeiro elemento - o primeiro filho. Na linha 122, você também está manipulando
os elementos presentes dentro de caixa1. Entretanto, você não está limitado ao primeiro elemento pois você consegue escolher a posição. Essa 
diferença na hora de manipular ocorre porque você está usando o children, com ele você consegue ter acesso aos elementos da coleção.

// if(caixa1.children.length > 0){
//     console.log("Possui filhos")
// }else{
//     console.log("Não possui filhos")
// }

------------------------------------------------------------------------------------------------------------------------------------------
As propriedades de um objeto do DOM são informações (valores) associadas a um elemento da página que você pode ler ou modificar 
com JavaScript.

# Em outras palavras:

Propriedade = um dado do objeto

Método = uma ação do objeto

 # Entendendo o DOM
O DOM (Document Object Model) representa o HTML como uma árvore de objetos.

Exemplo de HTML:

<p id="texto">Olá</p>
No JavaScript:

const p = document.querySelector("#texto")
Agora p é um objeto DOM. Esse objeto tem várias propriedades.

📦 Exemplos de propriedades do DOM
1. Propriedades de conteúdo

1.1 - textContent:
Retorna ou altera o texto do elemento:
p.textContent = "Novo texto"


1.2 - innerHTML
Retorna ou altera o HTML interno:
p.innerHTML = "<strong>Olá</strong>"

1.3 - innerText
Parecido com textContent, mas considera o CSS (visibilidade):
p.innerText = "Texto visível"


2. Propriedades de identificação

2.1 - id
console.log(p.id)

2.2 - className
p.className = "ativo"

2.3 - classList
Permite manipular classes

p.classList.add("destaque")
p.classList.remove("ativo")
p.classList.toggle("selecionado")


3. Propriedades de estrutura (relacionamento)
Essas mostram a posição do elemento na árvore DOM.

3.1 parentElement:
      p.parentElement
3.2 children
      p.children
3.3 firstElementChild / lastElementChild
      p.firstElementChild
3.4 nextElementSibling / previousElementSibling
      p.nextElementSibling


4. Propriedades de atributos

4.1 attributes

-Lista todos os atributos

p.attributes
🔹 getAttribute() (método)
p.getAttribute("id")
🔹 setAttribute() (método)
p.setAttribute("title", "Olá")


5. Propriedades de estilo
🔹 style
Permite alterar CSS diretamente

p.style.color = "red"
p.style.backgroundColor = "yellow"

6. Propriedades do documento
🔹 document.title
document.title = "Minha página"
🔹 document.body
document.body.style.backgroundColor = "black"

Diferença importante
Tipo	                                          O que faz

Propriedade	                                      Guarda um valor

Método	                                      Executa uma ação

Exemplo:

p.textContent = "Olá"   // propriedade
p.remove()              // método

Resumindo:

Propriedades do DOM são características dos elementos HTML acessadas via JavaScript.
Elas permitem ler e modificar o estado da página.
São essenciais para deixar páginas dinâmicas e interativas.

Exemplo prático completo:

<p id="msg">Olá</p>

<button id="btn">Mudar</button>

const msg = document.querySelector("#msg")

const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    msg.textContent = "Mudou!"
    msg.style.color = "blue"
    msg.classList.add("ativo")
})
------------------------------------------------------------------------------------------------------------------------------------------
Aula 3:

const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const curso=["HTML","CSS","JavaScript","PHP","React","MySQL","ReactNative"]

curso.map((el,chave)=>{
 const novoElemento= document.createElement('div')
 novoElemento.setAttribute("id","c" + (chave +1))
 novoElemento.setAttribute("class","curso c1")
 novoElemento.innerHTML=el
 caixa1.appendChild(novoElemento)
})
/*
Nesse código você está manipulando e criando elementos na página HTML através de array. Na vídeo aula foi usado o setAttribute
para adicionar os tipos de 'propiedades' e os valores das 'propiedades' - innerHTML está usando os valores do array 'curso' para nomear
os elementos da página. O correto seria subistituir o settAtribute, ele mexe diretamente no html e não nas propiedades, por propiedades.

##EXEMPLO##

element.setAttribute("class", "curso ativo") // mexendo com atributos (direto no HTML)
element.className = "curso ativo" // mexendo com a propriedade (mexe direto no js, mais performance)

Para que você entenda a diferença entre atributo e propiedade é importante saber o conceito de cada um.

O QUE É UM ATRIBUTO?

Um atributo é algo que vem do HTML. Ele define características do elemento na marcação (SE COMPORTA EXATAMENTE IGUAL A
PROPIEDADES, MAS O ATRIBUTO ESTÁ DENTRO DO HTML. ENTENDE A DIFERENÇA?)

##EXEMPLO##

Aqui temos atributos:

type="text"

id="nome"

value="André"

São valores que existem dentro do HTML antes mesmo do JavaScript rodar.

O QUE É UMA PROPRIEDADE?

A propiedade é algo que existe no objeto javascript que representa o elemento. Quando o navegador lê o HTML, ele cria uma
propriedade para cada elemento - e os atributos viram propiedades

###EXEMPLO###
Atributo:	                                   Propriedade:

-Vem do HTML	                               -Existe no objeto JS

-Valor inicial	                               -Valor atual (dinâmico)

-Manipulado com setAttribute()	               -Manipulado diretamente (element.value)

Exemplo prático (diferença importante)

html:

<input type="text" id="nome" value="André">

js:

const input = document.querySelector("#nome")

input.value = "Carlos"

Agora:

console.log(input.value) // "Carlos" =>>>> JS
console.log(input.getAttribute("value")) // "André" =>>> HTML



Então quando usar setAttribute?

- Use quando não existe propriedade equivalente.

Exemplo:

element.setAttribute("data-id", "123")


ou

element.setAttribute("aria-label", "Fechar")


- atributos customizados ou de acessibilidade.



O setAttribute pode sobrescrever tudo
element.setAttribute("class", "novo")


- Isso apaga todas as classes anteriores.

Já com:

element.classList.add("novo")


- Você adiciona sem perder o resto.

------------------------------------------------------------------------------------------------------------------------------------------
Aula 4



------------------------------------------------------------------------------------------------------------------------------------------
*/