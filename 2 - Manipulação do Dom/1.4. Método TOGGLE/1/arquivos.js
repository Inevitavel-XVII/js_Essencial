

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


const tirarSelecao=()=>{
  const cursoSelecionado=[...document.querySelectorAll(".selecionado")]
  cursoSelecionado.map((el)=>{
    el.classList.remove("selecionado")
  })
}

const criarNovoCurso=(curso)=>{
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id','c'+indice)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML=curso
    novoElemento.addEventListener("click",(evt)=>{
      tirarSelecao()
      evt.target.classList.toggle("selecionado")
    })
    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento) 
    indice++ 
})

const cursoSelecionado=()=>{
    const cursoSelecionado=[...document.querySelectorAll(".selecionado")]
    return cursoSelecionado[0]
}

btnCursoSelecionado.addEventListener('click',(evt)=>{
    if(rs!=undefined){
      alert("Curso selecionado: " + cursoSelecionado().innerHTML)
    }else{
      alert("Selecione um Curso")
    }
})

btnRemoveCurso.addEventListener('click',(evt)=>{
    const cs=cursoSelecionado() 
    if(cs!=undefined){
      cs.remove()
    }else{
      alert("Selecione um Curso")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{
    if(nomeCurso.value!=""){
      const novoCurso=criarNovoCurso(nomeCurso.value)
      caixaCursos.insertBefore(novoCurso,cursoSelecionado())
    }else{
      alert("Selecione um Curso")
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{
    if(nomeCurso.value!=""){
      const novoCurso=criarNovoCurso(nomeCurso.value)
      caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling)
    }else{
      alert("Selecione um Curso")
    }
})
