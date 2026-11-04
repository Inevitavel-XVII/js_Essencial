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
// O operador spread (...) em JavaScript deve ser usado quando você precisa expandir elementos de um array ou propriedades de um objeto em 
// outro local, como em chamadas de função, literais de array ou literais de objeto. É útil para copiar arrays ou objetos, combiná-los, 
// ou passá-los como argumentos para funções. 

// Quando usar o operador spread?
// Cópia de arrays e objetos:
//----------------------------------------------------------------------------------------------------------------------
// Para criar cópias rasas (shallow copies) de arrays ou objetos, evitando que modificações em uma cópia afetem a original. 
// Combinação de arrays e objetos:
//----------------------------------------------------------------------------------------------------------------------
// Para unir elementos de múltiplos arrays ou propriedades de múltiplos objetos em um novo array ou objeto. 
// Passar argumentos para funções:
//----------------------------------------------------------------------------------------------------------------------
// Para expandir um array ou objeto como argumentos individuais em uma função. 
// Literais de array:
//----------------------------------------------------------------------------------------------------------------------
// Para criar novos arrays a partir de outros arrays, adicionando elementos ou combinando vários arrays. 
// Literais de objeto:
//----------------------------------------------------------------------------------------------------------------------
// Para criar novos objetos a partir de outros objetos, adicionando propriedades ou combinando vários objetos. 
//----------------------------------------------------------------------------------------------------------------------
// Exemplos:

// Cópia de array:

// JavaScript

// const originalArray = [1, 2, 3];
// const copyArray = [...originalArray]; // copyArray agora é [1, 2, 3]

// Combinação de arrays:
// JavaScript

// const array1 = [1, 2];
// const array2 = [3, 4];
// const combinedArray = [...array1, ...array2]; // combinedArray é [1, 2, 3, 4]
//----------------------------------------------------------------------------------------------------------------------
// Passando argumentos para funções:
// JavaScript

// function soma(x, y, z) {
//   return x + y + z;
// }

// const numbers = [1, 2, 3];
// const resultado = soma(...numbers); // resultado é 6
//----------------------------------------------------------------------------------------------------------------------

// Cópia de objeto:
// JavaScript

// const originalObject = { a: 1, b: 2 };
// const copyObject = { ...originalObject }; // copyObject agora é { a: 1, b: 2 }
//----------------------------------------------------------------------------------------------------------------------

// Combinação de objetos:

// JavaScript

// const object1 = { a: 1, b: 2 };
// const object2 = { c: 3, d: 4 };
// const combinedObject = { ...object1, ...object2 }; // combinedObject é { a: 1, b: 2, c: 3, d: 4 }
//----------------------------------------------------------------------------------------------------------------------
// O operador spread simplifica o código, torna-o mais legível e ajuda a evitar bugs relacionados à modificação acidental de dados. 