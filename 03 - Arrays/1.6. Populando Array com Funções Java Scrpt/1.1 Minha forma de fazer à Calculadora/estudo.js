//MÉTODO FILTER: Ele pecorre um array e retorna como resultado uma lista de elementos(array novo) que estão de acordo com a condição que é definida
//na função passada como parâmetro
//Aula 1

// const caixaCurso=document.querySelector('#caixaCurso')
// const btn_c=document.querySelectorAll('.curso')
// const c1_2=document.querySelector('#c1_2')
// const cursos=['HTML','CSS','JavaScript','PHP','React','MySQL','ReactNative']
// const btnCursosSelecionado=document.querySelector('#btnCursoSelecionado')
// // cursos é o array usado para criar a estrutra que aparece para o usuário
// cursos.map((el,chave)=>{
    
//   // array de elementos html padrão
//     const novoElemento=document.createElement('div')
//     novoElemento.setAttribute('id','c'+chave)
//     novoElemento.setAttribute('class','curso c1')
//     novoElemento.innerHTML=el
    
//     //div dentro de cada elemento criado a cima
//     const comandos=document.createElement('div')
//     comandos.setAttribute('class','comandos')
    
//     //dentro de cada div comando, agora tem um input
//     const rb=document.createElement('input')
//     rb.setAttribute('type','radio')
//     rb.setAttribute('name','rb_curso')

//     comandos.appendChild(rb) //input anexado às div

//     novoElemento.appendChild(comandos) //cada div anexada aos elementos html

//     caixaCurso.appendChild(novoElemento) //elementos html, criados por um array js, anexados no elemento nativo HTML
// })

// //btnCursosSelecionado é a interação que o usuário consegue com a página quando o usuário clica no botão "Curso Selecionado"
// btnCursosSelecionado.addEventListener('click',(evt)=>{
//   //Nessa parte do código você filtra e retorna apenas o elemento que está sendo selecionado
//     let todosRadios=[...document.querySelectorAll('input[type=radio]')]
//     let radioSelecionado=todosRadios.filter((el,ind,arr)=>{
//       return el.checked
//     })
//   //Nessa parte do código você vai retornar o texto que existe dentro do elemento, você faz isso pois o JS permite a navegação no DOM  
//     radioSelecionado=radioSelecionado[0] //aqui você define por onde estar começando
//     const cursoSelecionado=radioSelecionado.parentNode.previousSibling.textContent //radioSelecionado → pai → irmão anterior → pegar texto
//     alert("Curso selecionado: " + cursoSelecionado)
//     // console.log(todosRadios)
//     // console.log(radioSelecionado)
//     // console.log(cursoSelecionado)
// })
/*

O que é uma div?

É um elemento genérico da estrutura. Ele serve apenas para organizar e agrupar elementos na página. (LAYOUT e ORGANIZAÇÃO)

###EXEMPLO###
<div>
  <p>Texto</p>
</div>

O que é o elemento input?

É um elemento de formulário que serve para RECEBER, SELECIONAR e ENVIAR DADOS(para o servidor, através do formulário). O <input> é considerado um elemento "void", 
ou seja, não tem tag de fechamento.

###EXEMPLO:###
<input>

TIPOS DE DADOS QUE O INPUT PODE COLETAR DO USUÁRIO:
-Nome
-Email
-Senha
-Número
-Data
-Opção(checkbox ou radio)

Exemplo de formulário:

<form>
  Nome: <input type="text">
  Senha: <input type="password">
</form>

Type: Ele define o tipo de input.

<input type="text">

Placeholder: Mostra um texto dentro do campo.

<input type="text" placeholder="Digite o seu nome">

Value: Define um valor inicial.

<input type="text" value="André">

ID: Identificador usado no JavaScript ou CSS.

<input type="text" id="nome">


###Usando filter de forma profissional em problema real no dia a dia de um junior js###

1- Filtros de usuários ativos (comum com dados de API)
Uma API que retorna uma lista de usuários ativos.

const usuarios= [
{nome:'Ana',ativo:true},
{nome:'Carlos',ativo:false},
{nome:'Maria',ativo:true},
{nome:'João',ativo:false}
]

const usuariosAtivos= usuarios.filter((el)=>{
  return el.ativo
  })
  
console.log(usuarioAtivos)

2 - Busca em um input (muito comum em interfaces)

Campo de busca de recursos:

const cursos = ["HTML","CSS","JavaScript","PHP","React","MySQL"]

const pesquisar = (textoParametro)=>{
  const resultado = cursos.filter((curso)=>{
    return curso.toLowerCase().includes(textoParametro.toLowerCase())
  })

  console.log(resultado)
}

pesquisar("re")

Muito usado em:

.cursos
.produtos
.usuários
.mensagens

O .toLowerCase() serve para trasnfomar todas as letras de um string em minúsculas. Nesse código ele transforma todas as letras das
strings existentes no array da constante curso em letras minúsculas, em seguida transforma todas as letras que está sendo escrita
na barra de pesquisa em letras mínusculas. 

O médoto includes() serve para verificar se o texto, que está sendo escrito, existe e retornar os elementos que possuem a letra 'a'.
Nesse caso ia retornar JavaScript e React, as unicas que retornando true. Portanto, o filter ia retornar apenas esses 2 elementos
por serem os únicas true do array.

EXEMPLOS:
let texto = "JavaScript"

console.log(texto.includes("Script"))
Resultado: true

let texto = "JavaScript"

console.log(texto.includes("Java"))
Resultado: true

console.log(texto.includes("PHP"))
Resultado: false

3 - Filtrar produtos por preço

const produtos = [
  {nome:"Notebook", preco:3000},
  {nome:"Mouse", preco:80},
  {nome:"Teclado", preco:150},
  {nome:"Monitor", preco:1200}
]

const baratos = produtos.filter((produto)=>{
  return produto.preco < 200
})

console.log(baratos)

Resultado:
[
 {nome:"Mouse", preco:80},
 {nome:"Teclado", preco:150}
]

*/
/*
------------------------------------------------------------------------------------------------------------------------------------------
Aula 2:

const caixaCurso=document.querySelector('#caixaCurso')
const btn_c=document.querySelectorAll('.curso')
const c1_2=document.querySelector('#c1_2')
const cursos=['HTML','CSS','JavaScript','PHP','React','MySQL','ReactNative']
const btnCursosSelecionado=document.querySelector('#btnCursoSelecionado')
const btnRemoveCurso=document.querySelector('#btnRemoverCurso')
// cursos é o array usado para criar a estrutra que aparece para o usuário
cursos.map((el,chave)=>{
    
  // array de elementos html padrão
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id','c'+chave)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML=el
    
    //div dentro de cada elemento criado a cima
    const comandos=document.createElement('div')
    comandos.setAttribute('class','comandos')
    
    //dentro de cada div comando, agora tem um input
    const rb=document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_curso')

    comandos.appendChild(rb) //input anexado às div

    novoElemento.appendChild(comandos) //cada div anexada aos elementos html

    caixaCurso.appendChild(novoElemento) //elementos html, criados por um array js, anexados no elemento nativo HTML
})

//Nessa parte do código você filtra e retorna apenas o elemento que está sendo selecionado
const radioSelecionado=()=>{
    let todosRadios=[...document.querySelectorAll('input[type=radio]')] //você criou uma variável que acessa todos os input da página do tipo radio
    let radioSelecionado=todosRadios.filter((el,ind,arr)=>{
      return el.checked
    })
    return radioSelecionado[0]
}

btnCursosSelecionado.addEventListener('click',(evt)=>{
  //Nessa parte do código você vai retornar o texto que existe dentro do elemento, você faz isso pois o JS permite a navegação no DOM
    const rs=radioSelecionado()//aqui você tá fazendo a chamada da função, ela está escrita na linha 33  
    const cursoSelecionado=rs.parentNode.previousSibling.textContent //radioSelecionado → pai → irmão anterior → pegar texto
    alert("Curso selecionado: " + cursoSelecionado)
})

btnRemoveCurso.addEventListener('click',(evt)=>{
  //Nesse código você está removendo um elemento da página
    const rs=radioSelecionado()//aqui você tá fazendo a chamada da função, ela está escrita na linha 33
    const cursoSelecionado=rs.parentNode.parentNode //radioSelecionado → pai → pai => remove elemento ----------- NAVEGAÇÃO DO DOM
    cursoSelecionado.remove() 
})
------------------------------------------------------------------------------------------------------------------------------------------
Código 2 da aula 2:

const caixaCurso=document.querySelector('#caixaCurso')
const btn_c=document.querySelectorAll('.curso')
const c1_2=document.querySelector('#c1_2')
const cursos=['HTML','CSS','JavaScript','PHP','React','MySQL','ReactNative']
const btnCursosSelecionado=document.querySelector('#btnCursoSelecionado')
const btnRemoveCurso=document.querySelector('#btnRemoverCurso')
// cursos é o array usado para criar a estrutra que aparece para o usuário
cursos.map((el,chave)=>{
    
  // array de elementos html padrão
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id','c'+chave)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML=el
    
    //div dentro de cada elemento criado a cima
    const comandos=document.createElement('div')
    comandos.setAttribute('class','comandos')
    
    //dentro de cada div comando, agora tem um input
    const rb=document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_curso')

    comandos.appendChild(rb) //input anexado às div

    novoElemento.appendChild(comandos) //cada div anexada aos elementos html

    caixaCurso.appendChild(novoElemento) //elementos html, criados por um array js, anexados no elemento nativo HTML
})

//Nessa parte do código você filtra e retorna apenas o elemento que está sendo selecionado
const radioSelecionado=()=>{
    let todosRadios=[...document.querySelectorAll('input[type=radio]')] //você criou uma variável que acessa todos os input da página do tipo radio
    let radioSelecionado=todosRadios.filter((el,ind,arr)=>{
      return el.checked
    })
    return radioSelecionado[0]
}

btnCursosSelecionado.addEventListener('click',(evt)=>{
  //Nessa parte do código você vai retornar o texto que existe dentro do elemento, você faz isso pois o JS permite a navegação no DOM
    const rs=radioSelecionado()//aqui você tá fazendo a chamada da função, ela está escrita na linha 33
    if(rs!=undefined){
      const cursoSelecionado=rs.parentNode.previousSibling.textContent //radioSelecionado → pai → irmão anterior → pegar texto
      alert("Curso selecionado: " + cursoSelecionado)
    }else{
      alert("Selecione um Curso")
    }
})

btnRemoveCurso.addEventListener('click',(evt)=>{
  //Nesse código você está removendo um elemento da página
    const rs=radioSelecionado()//aqui você tá fazendo a chamada da função, ela está escrita na linha 33  
    if(rs!=undefined){
      const cursoSelecionado=rs.parentNode.parentNode //radioSelecionado → pai → pai => remove elemento ----------- NAVEGAÇÃO DO DOM
      cursoSelecionado.remove() 
    }else{
      alert("Selecione um Curso")
    }
})


// o if/else serve para que quando ocorra um erro, esse erro será tratado. Para que o botâo 'curso selecionado' e 'remover curso' funcione, ele precisa
// que haja um elemento para ser selecionado. Se o elemento não for selecionado e os botões forem selecionados, aparece um erro no console de que o retorno
// da função é undefined
-----------------------------------------------------------------------------------------------------------------------------------------------------------
Aula 3:
Código 1 =

const caixaCursos=document.querySelector('#caixaCursos')
const btn_c=document.querySelectorAll('.curso')
const c1_2=document.querySelector('#c1_2')
const cursos=['HTML','CSS','JavaScript','PHP','React','MySQL','ReactNative']
const btnCursoSelecionado=document.querySelector('#btnCursoSelecionado')
const btnRemoveCurso=document.querySelector('#btnRemoverCurso')
const btnAdicionarNovoCursoAntes=document.querySelector("#btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois=document.querySelector("#btnAdicionarNovoCursoDepois")
const nomeCurso=document.querySelector("#nomeCurso")

let indice=0

// uma função que cria uma div(elemento), outra div(elemento), cria um input do tipo radio e depois anexa tudo um dentro do outro.
const criarNovoCurso=(curso)=>{
  // array de elementos html padrão
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id','c'+indice)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML=curso
    
    //div dentro de cada elemento criado a cima
    const comandos=document.createElement('div')
    comandos.setAttribute('class','comandos')
    
    //dentro de cada div comando, agora tem um input
    const rb=document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_curso')

    comandos.appendChild(rb) //input anexado às div

    novoElemento.appendChild(comandos) //cada div anexada aos elementos html
    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el) //você associa a função à uma const
    caixaCursos.appendChild(novoElemento) //elementos html, criados por um array js, anexados no elemento nativo HTML
    indice++ // índice + iterador para fazer o loop ocorrer
})
------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ###TÍTULO RESUMIDOR###
// Array criador de elementos
// ###2.O QUE ACONTECE###
// cursos é o array. você usa o map para pecorrer cada valor do array e transformar, cada um, em um elemento
// ###3.EXPLICAÇÃO DE CADA MÉTODO, FUNÇÃO OU PROPRIEDADE DO CÓDIGO###
// Primeiro: você associa a chamada de função à uma variável constante. Fazendo a chamada de função, você cria um elemento para cada valor que existe no array.
// Segundo: você anexa à variável ao elemento "caixaCursos", esse elemento existe no arquivo HTML --- ISSO ACONTECE PORQUE VOCÊ USA O .appendChild()
// Terceiro: você usa o iterador para que o cada elemento seja pecorrido no array
// ###4.CONCLUSÃO###
// Você tá criando elementos na página através do método map
// ###5.EXEMPLOS###
// Não tenho exemplos por enquanto

// COMENTÁRIO VERSÃO IA:
// O array "cursos" é percorrido usando map (embora o ideal fosse forEach)
// Para cada item do array:
// 1. A função criarNovoCurso é chamada, criando um elemento HTML
// 2. Esse elemento é retornado e armazenado na variável novoElemento
// 3. O elemento é adicionado ao DOM dentro de caixaCursos usando appendChild
// 4. O índice é incrementado para gerar IDs únicos para os elementos
//
// Obs: O map não está sendo usado corretamente aqui, pois seu retorno não é utilizado.
// O mais adequado seria usar forEach.
------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Função de filtro: Nessa parte do código você filtra e retorna apenas o elemento que está sendo selecionado
const radioSelecionado=()=>{
    let todosRadios=[...document.querySelectorAll('input[type=radio]')] //você criou uma variável que acessa todos os input da página do tipo radio
    let radioSelecionado=todosRadios.filter((el,ind,arr)=>{
      return el.checked 
    })
    return radioSelecionado[0]
}
// ###CHECKED E A RELAÇÃO DELE COM O FILTER### - TÍTULO RESUMIDOR

// ###O QUE ACONTECE###
// Nessa função você está criando um arrow function dentro da const radioSelecionado. Você cria à varável let todosRadios que acessa todos os input da 
// página que são do tipo rádio, cria uma váriavel nova que usa o método filter, usa o checked - propiedade do input e retorna o radio selecionado. 

// ###EXPLICAÇÃO DE CADA MÉTODO, FUNÇÃO OU PROPRIEDADE DO CÓDIGO###
// - Dentro do método filter você precisa retornar true e false para cada elemento - se for true ele é retornado e se for false o elemento é removido do array.
// - A propriedade checked faz parte dos input tipo radio (ou checkebox) e ela funciona dessa forma: true para selecionado e false quando não está selecionado.

// ###CONCLUSÃO###
// Então na prática, você está usando o checked para que apenas o selecionado fique true e o método filter retorne apenas o selecionado
// EXEMPLO MENTAL:

// ###EXEMPLOS###
// let radioSelecionado = todosRadios.filter((el) => {
//   return el.checked
// })

// Existe 3 radios A,B e o C, mas você selecionou o B
// Radio:               	checked:
// A	           =         false
// B	           =         true
// C	           =         false

// O único a permanecer no novo array do método filter é o B, o que foi selecionado.
// ##Importante pesquisar sobre propriedades do input
// ##Importante pesquisar sobre input tipo radio




btnCursoSelecionado.addEventListener('click',(evt)=>{
  //Nessa parte do código você vai retornar o texto que existe dentro do elemento, você faz isso pois o JS permite a navegação no DOM
    const rs=radioSelecionado()//aqui você tá fazendo a chamada da função, ela está escrita na linha 44
    if(rs!=undefined){
      const cursoSelecionado=rs.parentNode.previousSibling.textContent // Navegação no DOM: radioSelecionado → pai → irmão anterior → pegar texto
      alert("Curso selecionado: " + cursoSelecionado) // retorna texto mais o elemento selecionado
    }else{
      alert("Selecione um Curso")
    }
})

btnRemoveCurso.addEventListener('click',(evt)=>{
  //Nesse código você está removendo um elemento da página
    const rs=radioSelecionado()//aqui você tá fazendo a chamada da função, ela está escrita na linha 44  
    if(rs!=undefined){
      const cursoSelecionado=rs.parentNode.parentNode // Navegação no DOM: radioSelecionado → pai → pai => remove elemento ----------- NAVEGAÇÃO DO DOM
      cursoSelecionado.remove()// você remove o elemento
    }else{
      alert("Selecione um Curso")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{
  //Nessa parte do código você vai retornar o texto que existe dentro do elemento, você faz isso pois o JS permite a navegação no DOM
    const rs=radioSelecionado()//aqui você tá fazendo a chamada da função de filtro, ela está escrita na linha 33
    if(rs!=undefined){
      const cursoSelecionado=rs.parentNode.parentNode // navegação do DOM
      const novoCurso=criarNovoCurso(nomeCurso.value) // pega o valor digitado no input e passa o valor para a função criarNovoCurso(...)
      caixaCursos.insertBefore(novoCurso,cursoSelecionado) // elementoPai.insertBefore(novoElemento.elementoReferência) => pega o texto do input, que é transformado em elemento pela função criarNovoCurso(), e adiciona antes do selecionado 
    }else{
      alert("Selecione um Curso")
    }
})

// ###1.TÍTULO RESUMIDOR: BOTÃO DE ADICIONAR ANTES, PROPRIEDADE VALUE E INSERTBEFORE()###
// ###2.O QUE ACONTECE###

// Esse btnAdicionarNovoCursoAntes é um botão que cria um elemento anterior ao que está sendo selecionado. Primeiro você faz a chamada de função, 
// radioSelecionado (função de filtro que permite retornar apenas o rádio que está sendo selecionado), faz a navegação do DOM quando cria a 
// const novoCurso, insere o valor digitado no input(através do .value), passa esse valor para a função criarNovoCurso (função responsável 
// por fazer os elementos do DOM através do JS), o valor adicionado a função é tranformado em elemento e sua posição é sempre uma anterior
// ao radio selecionado e caso o botão seja clicado sem um radio selecionado, retorna um alerta para o usuário "alert("Selecione um Curso")".

// ###3.EXPLICAÇÃO DE CADA MÉTODO, FUNÇÃO OU PROPRIEDADE DO CÓDIGO###
// CHAMADA DE FUNÇÃO:
// -const rs=radioSelecionado()//aqui você tá fazendo a chamada da função de filtro
// VALUE:
// -const novoCurso=criarNovoCurso(nomeCurso.value) // pega o valor digitado no input e passa o valor para a função criarNovoCurso(...) -- isso
// acontece por conta da propriedade .value(.value é uma propriedade do elemento input) .A propriedade value em um elemento <input> do HTML representa 
// o conteúdo atual daquele campo, ou seja, o texto que o usuário digitou, o valor pré-definido ou a seleção feita. Ela funciona como uma ponte entre
// o que está na tela (HTML) e o que o JavaScript consegue ler ou alterar.

// .Leitura (Get): Você usa a propriedade value para pegar o que o usuário escreveu.

// // Seleciona o input e pega o valor atual
//   const nome = document.querySelector('#meuInput').value;
//   console.log(nome); // Mostra o que foi digitado

// .Escrita (Set): Você usa a propriedade value para alterar o texto dentro do input via JS.

// // Altera o conteúdo do input
//   document.querySelector('#meuInput').value = "Novo Valor";  

// .Diferença Crucial: Atributo HTML vs. Propriedade JS
// Atributo value="..." (HTML): Define o valor inicial ou padrão do campo. Ele não muda sozinho quando o usuário digita.
// Propriedade .value (JS/DOM): Representa o valor atual e em tempo real. 

// .Comportamento por Tipo de Input:
// ##text, password, email: O value é o texto inserido.
// ##radio, checkbox: O value é a informação enviada ao servidor caso o item seja marcado.
// ##button, submit, reset: O value é o texto exibido dentro do botão.

// INSERTBEFORE():

// Na parte caixaCursos.insertBefore(novoCurso,cursoSelecionado) você está usando o método insertBefore() para criar um elemento novo e colocar 
// uma posição anterior ao radio selecionado.

// O método insertBerfore() é um método em js criado para inserir um novo elemento antes do elemento filho de referência dentro de um elemento pai.
// É fundamental para a manipulação dinâmica de páginas web, permitindo a criação e posicionamento de elementos em locais específicos.

// COMO FUNCIONA?

// 1. IDENTIFICA O ELEMENTO PAI: Seleciona o container que contém a lista de elementos ou o elemento.
// 2. IDENTIFICA O ELEMENTO DE REFERÊNCIA: Seleciona o elementos filho existentes antes do qual o novo elemento será inserido.
// 3. INSERE O NOVO ELEMENTO: O método insere o novo elemento nó antes da referência.

// SINTAXE:

// elementoPai.insertBefore(novoElemento, elementoReferencia);

// .elementoPai: O nó que vai conter o novo elemento.
// .novoElemento: O elemento nó que será inserido.
// .elementoReferência: O elemento filho existente. O novoElemento será inserido antes dele.

// ###4.CONCLUSÃO###
// Você digita um texto e consegue criar um elemento novo, com esse texto dentro, antes do elemento que você selecionou
// ###DÚVIDA INTERESSANTE: se o input caputura o que foi digitado e pode alterar, então qual o motivo de existir a propriedade value?###

// ###5.EXEMPLOS###

// VALUE:
// <input type="text" id="campo" value="Texto Inicial">
// <button onclick="alertar()">Pegar Valor</button>

// <script>
//   function alertar() {
//     // Acessa o input e mostra seu valor atual
//     let campo = document.getElementById('campo');
//     alert(campo.value);
//   }
// </script>

// INSERTBEFORE():
// <ul id="minhaLista">
//   <li>Item 1</li>
//   <li id="item2">Item 2</li>
//   <li>Item 3</li>
// </ul>

// <script>
//   // 1. Criar o novo elemento
//   var novoItem = document.createElement("li");
//   novoItem.textContent = "Novo Item!";

//   // 2. Selecionar o pai
//   var lista = document.getElementById("minhaLista");

//   // 3. Selecionar o elemento de referência
//   var itemReferencia = document.getElementById("item2");

//   // 4. Inserir antes da referência
//   lista.insertBefore(novoItem, itemReferencia);
// </script>

//  Resultado:
// <ul id="minhaLista">
//   <li>Item 1</li>
//   <li>Novo Item!</li> <!-- Inserido aqui -->
//   <li id="item2">Item 2</li>
//   <li>Item 3</li>
// </ul>
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
btnAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{
  //Nessa parte do código você vai retornar o texto que existe dentro do elemento, você faz isso pois o JS permite a navegação no DOM
    const rs=radioSelecionado()//aqui você tá fazendo a chamada da função de filtro, ela está escrita na linha 33
    if(rs!=undefined){
      const cursoSelecionado=rs.parentNode.parentNode.nextSibling
      const novoCurso=criarNovoCurso(nomeCurso.value)
      caixaCursos.insertBefore(novoCurso,cursoSelecionado)
    }else{
      alert("Selecione um Curso")
    }
})
// nesse botão Adicionar Depois a única diferença será na navegação do DOM, você vai acrescentar o nextSibling
-----------------------------------------------------------------------------------------------------------------------------------------------------------
// ###1.CHECKED E A RELAÇÃO DELE COM O FILTER### - TÍTULO RESUMIDOR
// ###2.O QUE ACONTECE###
// ###3.EXPLICAÇÃO DE CADA MÉTODO, FUNÇÃO OU PROPRIEDADE DO CÓDIGO###
// ###4.CONCLUSÃO###
// ###5.EXEMPLOS###


// ###Ler uma documentação sobre .insertBefore()####
// ###Como o evento bntAdicionarNovoCursoAntes() consegue adicionar um novo elemento na função criarNovoCurso(), sendo que o método map já está fazendo a chamada de função?###
// ###Existe o array cursos, como a função criarNovoCurso() está tendo acesso ao array?

*/