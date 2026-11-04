const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const curso=["HTML","CSS","JavaScript","PHP","React","MySQL","ReactNative"]

curso.map((el,chave)=>{
 const novoElemento= document.createElement('div')
 novoElemento.setAttribute("id","c" + (chave +1))
 novoElemento.setAttribute("class","curso c1")
 novoElemento.innerHTML=el

 const btn_lixeira=document.createElement("img") // tipo de elemento criado é uma imagem
 btn_lixeira.setAttribute("src","./icone_lixeira.webp") // define o caminho da imagem que será exibido dentro do elemento <img> criado.
 btn_lixeira.setAttribute("class","btn_lixeira") // atributo de classe e o nome da classe
 btn_lixeira.addEventListener("click",(evt)=>{ // evento de click que remove elemento hmtl
     caixa1.removeChild(evt.target.parentNode) // removendo elementos presentes na 'div caixa1'
 })

 novoElemento.appendChild(btn_lixeira)
 caixa1.appendChild(novoElemento)
 console.log(caixa1)
})
/*
Nesse código, você está praticando remover elementos. Primeiro você está criando um array de elementos e usando o método map para adicionar
div, id, classes e o nome de cada elemento vísivel na página. Depois você cria o elemento(botão) lixeira para remover esses elementos quando
o ícone lixeira for clicado. Para que o ícone lixeira fique dentro de cada elemento do array principal e não fora deles como se fosse outro
elemento qualquer, você anexa o 'btn_lixeira' dentro das 'divs' e as divs você colocou dentro da 'caixa1'. 
*/