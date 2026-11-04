const p_array=document.querySelector("#array")
const txt_pesquisar=document.querySelector("#txt_pesquisar")
const btnPesquisar=document.querySelector("#btnPesquisar")
const resultado=document.querySelector("#resultado")

const elementos_array=[10,5,8,2,9,15,20]
p_array.innerHTML="["+ elementos_array +"]"

btnPesquisar.addEventListener("click",(evt)=>{
    resultado.innerHTML="O valor não foi encontrado"
    const ret=elementos_array.find((e,i)=>{
        if(e==txt_pesquisar.value){
            resultado.innerHTML="Valor encontrado " + e + " na posição" + i
            return e
        }
    })
    console.log(ret)
})

// VERSÃO QUE EU MODIFIQUEI :)
// const p_array=document.querySelector("#array")
// const txt_pesquisar=document.querySelector("#txt_pesquisar")
// const btnPesquisar=document.querySelector("#btnPesquisar")
// const resultado=document.querySelector("#resultado")

// const elementos_array=[10,5,8,2,9,15,20]
// p_array.innerHTML="["+ elementos_array +"]"

// btnPesquisar.addEventListener("click",(evt)=>{
//     if(txt_pesquisar.value === ""){
//     resultado.innerHTML="Digite um valor"
//     return
//     }else{
//         const ret=elementos_array.find((e,i)=>{
//             if(e==txt_pesquisar.value){
//                 resultado.innerHTML="Valor encontrado " + e + " na posição" + i
//                 return e
//             }
//         })
//         console.log(ret)
//     }
// })

// const p_array=document.querySelector("#array")
// const txt_pesquisar=document.querySelector("#txt_pesquisar")
// const btnPesquisar=document.querySelector("#btnPesquisar")
// const resultado=document.querySelector("#resultado")

// const elementos_array=[10,5,8,2,9,15,20]
// p_array.innerHTML="["+ elementos_array +"]"

// btnPesquisar.addEventListener("click",(evt)=>{
//     resultado.innerHTML="O valor não foi encontrado"
//     const ret=elementos_array.find((e,i)=>{
//         if(e.toUpperCase()==txt_pesquisar.value.toUpperCase()){
//             resultado.innerHTML="Valor encontrado " + e + " na posição" + i
//             return e
//         }
//     })
//     console.log(ret)
// })
// pesquisar sobre transformar números em string e vice-versa

/*
Como funciona o método find?

O método find serve para encontrar o primeiro elemento do array que satisfaça uma condição. O método encerra no primeiro elemento que 
retorna true - se nenhum passar, ele retorna undefined.

SINTAXE: 
array.find((elemento, índice, array)=>{
 //condição
})

EXEMPLO SIMPLES:

const numeros = [10, 20, 30, 40];

const resultado = numeros.find(num => num > 25);

console.log(resultado);

SAÍDA: 30

EXEMPLOS COM OBJETOS: 

const usuarios = [
  { nome: "Ana", idade: 18 },
  { nome: "Carlos", idade: 25 },
  { nome: "João", idade: 30 }
];

const usuario = usuarios.find(u => u.nome === "Carlos");

console.log(usuario);

SAÍDA: { nome: "Carlos", idade: 25 }

IMPORTANTE LEMBRAR:
-1: Para no primeiro true
-2: Não pecorre o array 
-3: Se não encontrar nenhum elemento que corresponda à condição, retorna undefined

DIFERENÇA ENTRE FIND() E FILTER()
- .find() -> retorna um único elemento e encerra o loop ali mesmo.
- .filter() -> retorna um array com vários elementos.

A primeira vista, o método find parece ser desnecessário porque o filter consegue fazer a mesma coisa e com mais resultados.
Entretanto, ele é mais limpo e performático por retornar apenas o primeiro elemento que estar de acordo com a condição imposta,
não cria um novo array, não usa memória desnecessária para encontrar apenas um item e ele encerra o loop no primeiro true. Claro,
é importante ressaltar que cada um atendem à necessidades diferentes, um não é melhor ou substitui o outro para todas as situações
e é por isso que cada um tem a sua maneira de funcionar.


*/