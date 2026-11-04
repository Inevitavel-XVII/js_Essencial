const p_array=document.querySelector("#array")
const btnVerificar=document.querySelector("#btnVerificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[16,12,20,10,17,15,13,11,18]
p_array.innerHTML="["+ elementos_array +"]"

btnVerificar.addEventListener("click",(evt)=>{
    const ret=elementos_array.some((e,i)=>{
        if(e<18){
            resultado.innerHTML="Array não conforme na posição " + i
        }
        return e>18
    })
    if(ret){
        resultado.innerHTML="OK"
    }
})
/*
A primeira vista o método find() e o método some() são parecidos, mas eles são diferentes. Essa afirmação explico abaixo:
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
find();

Esse método *retorna o primeiro elemento* do array que satisfaz a condição e *encerra ali mesmo sem pecorrer o restante do array*. Se ele não encontrar um elemento,
ele retorna undefined.

EXEMPLO:
const numeros = [5, 10, 15, 20];

const resultado = numeros.find(n => n > 10);

console.log(resultado); // 15

some();

Esse método verifica se existe ao menos um elemento que esteja de acordo com a condição e retorna 'true' ou 'false'. No momento que ele encontrar o elemento que
esteja de acordo com a condição, ele não verifica o restante dos elementos do array

EXEMPLO:
const numeros = [5, 10, 15, 20];

const resultado = numeros.some(n => n > 10);

console.log(resultado); // true
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
COMPARAÇÃO:

find() --> retorna elemento // serve para quando você quer o valor
some() --> retorna true ou false // serve para você saber se existe um valor
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
EXEMPLO:
const usuarios = [
  { nome: "Ana", ativo: false },
  { nome: "Carlos", ativo: true }
];

// Quero o usuário ativo
const usuarioAtivo = usuarios.find(u => u.ativo);

// Quero saber se existe algum ativo
const temAtivo = usuarios.some(u => u.ativo);

console.log(usuarioAtivo); // { nome: "Carlos", ativo: true }
console.log(temAtivo);     // true


*/