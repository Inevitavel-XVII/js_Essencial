const obj1=document.getElementsByTagName("div")
const obj2=[...document.getElementsByTagName("div")] // usar spread você tem mais possibilidades de usar funções, propiedades e metódos em uma variável

objs2.array.forEach(element => { // função para pecorrer os elementos da const obj2
    element.innerHtml="curso" //  é uma propriedade em JavaScript que permite acessar ou modificar o conteúdo HTML de um elemento
});
// objs2.array.forEach(element => {element.innerHtml="curso"}); --- arrow function
console.log(objs1)
console.log(objs2)

//-------------------------------------------------------------------------------------------------------------------------------------------
let n1=[10,20,30]
let n2=[10,20,30]
let n3=[...n1]

console.log("n1" + n1)
console.log("n2" + n2)
console.log("n3" + n3)
//-------------------------------------------------------------------------------------------------------------------------------------------
