const btn_soma=document.querySelector("#btn_soma")
const btn_subtracao=document.querySelector("#btn_subtracao")
const btn_multiplicacao=document.querySelector("#btn_multiplicacao")
const btn_divisao=document.querySelector("#btn_divisao")
const res=document.querySelector("#res")

const op=[
  ()=>{
    const val=[
      document.querySelector("#valor1").value, // mexe com o input do valor 1
      document.querySelector("#valor2").value  // mexe com o input do valor 2
    ]
    res.value=Number(val[0])+Number(val[1]) // o valor do input "res" é valor 1 + valor 2
  },
  ()=>{
    const val=[
      document.querySelector("#valor1").value, // mexe com o input do valor 1
      document.querySelector("#valor2").value  // mexe com o input do valor 2
    ]
      res.value=Number(val[0])-Number(val[1]) // o valor do input "res" é o valor de 1 - valor 2
  },
  ()=>{
    const val=[
      document.querySelector("#valor1").value, // mexe com o input do valor 1
      document.querySelector("#valor2").value  // mexe com o input do valor 2
    ]
      res.value=Number(val[0])*Number(val[1]) // o valor do input "res" é o valor de 1 * valor de 2
  },
  ()=>{
    const val=[
      document.querySelector("#valor1").value, // mexe com o input do valor 1
      document.querySelector("#valor2").value  // mexe com o input do valor 2
    ]
    res.value=Number(val[0])/Number(val[1]) // o valor do input "res" é o valor de 1 / valor de 2
  }
]

btn_soma.addEventListener("click",op[0]) // no botão soma executa a "função soma" que está presente no índice "0"
btn_subtracao.addEventListener("click",op[1]) // no botão subtração executa a "função subtração" que está presente no índice "1"
btn_multiplicacao.addEventListener("click",op[2]) // no botão multiplicação executa a "função multiplicação" que está presente no índice "2"
btn_divisao.addEventListener("click",op[3]) // no botão soma divisão a "função divisão" que está presente no índice "3"
