const f_texto=document.querySelector("#f_texto")
const p_texto=document.querySelector("#p_texto")
const btn_texto=document.querySelector("#btn_texto")

btn_texto.addEventListener("click",(evt)=>{});

let num=10
let curso="JavaScript"

// window.localStorage.setItem("numero",num)
// localStorage.setItem("nome","Bruno")
// localStorage.setItem("canal","CBF Cursos")
// localStorage.setItem("curso",curso)

// alert(localStorage.length)
// alert(localStorage.length)
// alert(localStorage.length)
// alert(localStorage.length)
// alert(localStorage.length)

localStorage.clear()

sessionStorage.setItem("nome","Bruno")
sessionStorage.setItem("canal","CBF Cursos")
sessionStorage.setItem("curso",curso)