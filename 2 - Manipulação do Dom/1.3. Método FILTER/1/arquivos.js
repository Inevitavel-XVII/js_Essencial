// Por que estruturar assim?

//  1. Primeiro: capturar tudo do DOM
//  2. Depois: criar funções
//  3. Depois: adicionar eventos

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


const criarNovoCurso=(curso)=>{
  //elemento html padrão
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id','c'+indice)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML=curso
    
    //div dentro do elemento criado a cima
    const comandos=document.createElement('div')
    comandos.setAttribute('class','comandos')
    
    //dentro de cada div comando, agora tem um input do tipo radio
    const rb=document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_curso')

    comandos.appendChild(rb) //input anexado às div

    novoElemento.appendChild(comandos) //cada div anexada ao elemento html
    return novoElemento
}


cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el) //você associa a função à uma const
    caixaCursos.appendChild(novoElemento) //elementos html, criados por um array js, anexados no elemento nativo HTML
    indice++ // índice + iterador para fazer o loop ocorrer
})

//Função de filtro: Nessa parte do código você filtra e retorna apenas o elemento que está sendo selecionado
  const radioSelecionado=()=>{
    let todosRadios=[...document.querySelectorAll('input[type=radio]')] //você criou uma variável que acessa todos os input da página do tipo radio
    let radioSelecionado=todosRadios.filter((el,ind,arr)=>{
      return el.checked 
    })
    return radioSelecionado[0]
}

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
      const cursoSelecionado=rs.parentNode.parentNode
      const novoCurso=criarNovoCurso(nomeCurso.value) // value representa o valor que o usuário escreveu ou selecionou 
      caixaCursos.insertBefore(novoCurso,cursoSelecionado) 
    }else{
      alert("Selecione um Curso")
    }
})

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

/*

*/