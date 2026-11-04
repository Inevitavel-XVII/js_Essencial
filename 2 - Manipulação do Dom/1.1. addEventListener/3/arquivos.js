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

