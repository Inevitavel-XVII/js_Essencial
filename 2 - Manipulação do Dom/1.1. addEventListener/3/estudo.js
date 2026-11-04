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
*/
//------------------------------------------------------------------------------------------------------------------------------------------------
// const caixa1 = document.querySelector("#caixa1")
// const caixa1 = document.querySelectorAll("#caixa1")
// const caixa2 = document.querySelector("#caixa2")
// const caixa2 = document.querySelectorAll("#caixa2")
// const btn = document.querySelector("#btn_copiar")
//const btn = document.querySelectorAll("#btn_copiar") errado, você está usando "id"
// const btn2 = document.querySelector("#btn_copiar2")
// const todosCursos = [...document.querySelectorAll(".curso")]
/*
Importante resaltar que usar .querySelector é melhor que .querySelectorAll quando se trata de "id"
*/

// todosCursos.map((el)=>{
//     el.addEventListener("click",(evt)=>{ 
//         const curso=evt.target
//         curso.classList.toggle("selecionado")
//     })
// })
/*
Ao invés de colocar .add() ou .remove(), você vai usar o .toggle().
Esse método adiciona caso haja nada e se houver algo, ele retira.
É importante você perceber que selecionado está escrito sem o ".", pois você está escrevendo o nome da classe
que está sendo adicionada(ou removida), através do .toggle().

O HTML armazena dados e o CSS precisa encontrar esses dados. Para o HTML a classe é um texto(string) e o css precisa
do ponto para acessar essa classe. Esse ponto se chama SÍMBOLO("#"",".","[]",div). As tags é necessário escrever apenas
o nome da tag e "[]" são atributos.

OBSERVAÇÃO IMPORTANTE: DÚVIDA QUE SURGIU NA MENTE 'QUAL A REAL DIFERENÇA ENTRE ID E CLASSES?'

Existe um aluno de escola pública e o nome dele é Pedro. O id seria o cpf dele, ninguém tem o mesmo cpf
de pedro. Entretanto, existe outros pessoas com o nome pedro, existe outros estudantes naquela escola
pública e existe outras escolas públicas com outros estudantes com o nome Pedro. Portanto, o id é algo único
que serve para identificar determinada coisa e a classe é uma característica que pode se repetir.

*/
// btn.addEventListener("click",()=>{
//     const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
//     cursosSelecionados.map((el)=>{
//         caixa2.appendChild(el)
//     })
// })
/*
Esse loop do map é importante pois você não está apenas com um elemento sendo usado, mas está trabalhando
com vários de um vez e o loop serve para isso. Se não fosse o loop você iria ter que escrever esse código
diversas vezes.

Então por que usar loop nesse tipo de coisa?

Porque você está *manipulando listas dinâmicas*, *reagindo a ações do usuário* e *lidando com quantidade variável de elementos*
Eventos quase sempre exigem loops, porque o *usuário decide quantos itens seleciona e o código precisa se adaptar*

Nesse caso, o método map não é o ideal por ser um método que transforma um array em outro tipo array. O método ideal seria
o forEach, pois ele não cria um novo array, executa cada ação e deixa claro para o dom que é um efeito colateral da interação
do usuário. Portanto, o forEach é o loop mais semântico para essa situação.
*/
//--------------------------------------------------------------------------------------------------------------------------------------
const caixa1 = document.querySelector("#caixa1")
// const caixa1 = document.querySelectorAll("#caixa1")
const caixa2 = document.querySelector("#caixa2")
// const caixa2 = document.querySelectorAll("#caixa2")
const btn = document.querySelector("#btn_copiar")
//const btn = document.querySelectorAll("#btn_copiar") errado, você está usando "id"
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{ 
        const curso=evt.target
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    const cursoNaoSelecionados=[...document.querySelectorAll(".curso:not(.selecionado")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursoNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})
/*
const cursoNaoSelecionados=[...document.querySelectorAll(".curso:not(.selecionado")]
Nesse trexo do código, está escrito "os elementos que possuem a classe curso sem a classe selecionado". Se você não
colocar o ".curso" antes de :not(), você vai está colocando todos os elementos do DOM. Usando o ".curso" você
consegue limitar qual o grupo que não tem a classe ".selecionado", dessa forma você evitou que todos os elementos do 
DOM fora do grupo ".curso" vai aparecer no resultado.

*/

