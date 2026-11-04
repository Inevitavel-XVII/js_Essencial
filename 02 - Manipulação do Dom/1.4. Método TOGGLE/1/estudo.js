// // Por que estruturar assim?

// //  1. Primeiro: capturar tudo do DOM
// //  2. Depois: criar funções
// //  3. Depois: adicionar eventos

// const caixaCursos=document.querySelector('#caixaCursos')
// const btn_c=document.querySelectorAll('.curso')
// const c1_2=document.querySelector('#c1_2')
// const cursos=['HTML','CSS','JavaScript','PHP','React','MySQL','ReactNative']
// const btnCursoSelecionado=document.querySelector('#btnCursoSelecionado')
// const btnRemoveCurso=document.querySelector('#btnRemoverCurso')
// const btnAdicionarNovoCursoAntes=document.querySelector("#btnAdicionarNovoCursoAntes")
// const btnAdicionarNovoCursoDepois=document.querySelector("#btnAdicionarNovoCursoDepois")
// const nomeCurso=document.querySelector("#nomeCurso")

// let indice=0

// // função para remover a classe selecionado
// const tirarSelecao=()=>{
//   const cursoSelecionado=[...document.querySelectorAll(".selecionado")]
//   cursoSelecionado.map((el)=>{
//     el.classList.remove("selecionado")
//   })
// }

// const criarNovoCurso=(curso)=>{
//   //elemento html padrão
//     const novoElemento=document.createElement('div')
//     novoElemento.setAttribute('id','c'+indice)
//     novoElemento.setAttribute('class','curso c1')
//     novoElemento.innerHTML=curso
//     novoElemento.addEventListener("click",(evt)=>{
//       tirarSelecao()
//       evt.target.classList.toggle("selecionado")
//     })
//     return novoElemento
// }
// /*
// no evento de click você consegue substituir a necessidade de usar um radio button através da função tirarSelecao() e o toggle.
// sempre que você clica em um elemento ele remove a classe "selecionado" e usa o toggle(), dessa forma você vai ter apenas um elemento
// com a classe selecionado e não todos os elementos com essa classe.
// */
// /*
// target = serve para saber qual elemento foi clicado / aparece no console do navegador
// (melhor usar currentTarget, ele evita erros) ###PESQUISAR MAIS SOBRE###
// classList = propriedade do elemento DOM e é uma forma de manipular classes de um elemento
// toggle = método do classList -> serve para alternar. Se existe, ele tira. Se não tem, ele adiciona.
// add = adicionar classe
// remove = remover classe
// */

// cursos.map((el,chave)=>{
//     const novoElemento=criarNovoCurso(el) //você associa a função à uma const
//     caixaCursos.appendChild(novoElemento) //elementos html, criados por um array js, anexados no elemento nativo HTML
//     indice++ // índice + iterador para fazer o loop ocorrer
// })

// //Função de filtro: Nessa parte do código você filtra e retorna apenas o elemento que está sendo selecionado
// const cursoSelecionado=()=>{
//     const cursoSelecionado=[...document.querySelectorAll(".selecionado")]
//     return cursoSelecionado[0]
// }

// btnCursoSelecionado.addEventListener('click',(evt)=>{
//     if(rs!=undefined){
//       alert("Curso selecionado: " + cursoSelecionado().innerHTML) // retorna texto mais o elemento selecionado
//     }else{
//       alert("Selecione um Curso")
//     }
// })

// btnRemoveCurso.addEventListener('click',(evt)=>{
//     const cs=cursoSelecionado() 
//     if(cs!=undefined){
//       cs.remove()
//     }else{
//       alert("Selecione um Curso")
//     }
// })

// btnAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{
//     if(nomeCurso.value!=""){
//       const novoCurso=criarNovoCurso(nomeCurso.value)
//       caixaCursos.insertBefore(novoCurso,cursoSelecionado())
//     }else{
//       alert("Selecione um Curso")
//     }
// })

// btnAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{
//     if(nomeCurso.value!=""){ // pega o valor digitado do input. Se for diferente de vazio, ele executa a linha seguinte.
//       const novoCurso=criarNovoCurso(nomeCurso.value) // pega o valor digitado do input e cria no array
//       caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling) // direciona a posição do novo elemento
//     }else{
//       alert("Selecione um Curso")
//     }
// })

// /*

// */