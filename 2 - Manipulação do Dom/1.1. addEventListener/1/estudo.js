//addEventListener são os eventos que ocorrem no DOM
/*
O que é o addEventListener?

É um método dos elementos da página usado para executar eventos, a parte interativa que ocorre entre o usuário e o computador.
Ele permite que a experiência do usuário seja algo novo e dá uma identidade para a página e aplicativos.
Definição técnica: é o método usado para registrar uma função que será executada quando um evento acontecer em um elemento.

**EXEMPLO**
------------------------------------------------------------------------------------------------------------------------------------------------
elemento.addEventListener('evento', função) >>>> Essa é a sintaxe

Elemento: Onde ocorre o evento.
Evento: O tipo de interação com o usuário.
Função: O callback que será executado.
------------------------------------------------------------------------------------------------------------------------------------------------

const botao= document.querySelector('#btn');

botao.addEventListerner('click', ()=>{
    console.log("Botão Clicado");
    });

Neste exemplo, você está criando um botão de clique na página. Quando você clicar no local, vai aparecer no CONSOLE
do navegador "Botão Clicado".

Tipos de Eventos Comuns:

CLICK: clica com o mouse em um elemento.
MOUSEOVER: passa o mouse em cima.
KEYDOWN: aperta uma tecla.
SUBMIT: envia um formulário.
SCROLL: rola à página. 

//------------------------------------------------------------------------------------------------------------------------------------------------
O que significa o alert dentro da função msg ?
------------------------------------------------------------------------------------------------------------------------------------------------
const c1= document.querySelector('#c1'); 

const msg=()=>{ 
    alert('clicou') 
}; 

c1.addEventListener('click', msg)
------------------------------------------------------------------------------------------------------------------------------------------------
O alert é uma função pronta do navegador. Ele é um método do objeto window, o alert serve para mostrar uma caixa de aviso.
Um aviso bloqueante, nada mais acontece após a pessoa fechar o aviso.
O objeto window é um objeto global. Portanto, você não precisa escrever window.alert('clicou'), apenas alert('clicou').
Tudo que pertence ao objeto window pode ser usado sem acesso direto, sem prefixo.

Em c1.addEventListener("click", msg) não é uma chamada de função, mas está passando a referência da função que será
executada caso esse evento ocorra. Ou seja, quando houver um click em determinada div ou qualquer outro lugar da tela - evento -
a função é chamada e gera algum resultado( a função ocorre ). Eventos usam callbacks, o nome técnico correto é Event handler.

Existe uma diferença entre callbacks, eventos e a chamada de função.
//------------------------------------------------------------------------------------------------------------------------------------------------
EXEMPLO DE CÓDIGO COM MANIPULAÇÃO DE ELEMENTOS USANDO EVENTOS E O CSS

const c1= document.querySelector('#c1')
const msg=()=>{
    alert('clicou')
}

c1.addEventListener('click', (evt)=>{ // evt serve para que você saiba quem disparou o elemento.
    const el= evt.target // target revela qual o elemento que disparou o elemento
    el.classList.add("destaque") // .add() - adiciona uma classe em classList. // classList é uma lista de classes.
}) 

/*
Você está mudando a cor de um elemento, manipulando o css

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
------------------------------------------------------------------------------------------------------------------------------------------------

*/

