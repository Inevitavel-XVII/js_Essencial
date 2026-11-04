const caixa=document.querySelector("#caixa")

let cores=["azul","verde","vermelho",["claro","escuro","médio"]]
let cursos=["HTML","CSS","JavaScript",cores]

// cursos[0]=2023

// cursos.push("C++") // adiciona o elemento no final do array
// cursos.unshift("Python") // adiciona o elemento no começo do array
// cursos.pop() // remove o último elemento do array
// cursos.shift() // remove o elemento do começo do array

console.log(cursos[3][3][2])

cursos.map((el)=>{
    let p=document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)
})