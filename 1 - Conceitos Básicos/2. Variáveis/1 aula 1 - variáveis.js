"use strict"
/*

***O que é uma variável?***

Uma variável é um nome simbolíco para um espaço na memória onde dados são armazenados e que podem ser usados e reutilizados no código.
Elas são criadas usanndo palavras-chave como var, let e const, seguidas por um nome e um valor opcional. As variáveis são essenciais
para armazenar informações, como o nome de usuário, um número ou um resultado de cálculo.



Existe 3 tipos de variáveis: var, let e const.

As variáveis do tipo var podem ser acessadas fora do escopo, mudar seu tipo e fazer alterações sem restrição.
As variáveis do tipo let não podem se acessadas fora do escopo, podem mudar seu tipo e fazer alterações - desde
que seja dentro do escopo em que ela foi criada.
As variáveis do tipo const comporta-se da mesma maneira que as do tipo let, mas possuem a restrição na mudança de tipo
e alterações na variável

Exemplos 1 - tipo var:
if(true){
   var nome="Bruno"
}
console.log(nome)

Exemplo 2 - tipo let:
let nome= "Bruno" // foi definido que essa variável let é do tipo string
nome="Cachorro" // permanece uma string, mas mudou o nome de Bruno para Cachorro
nome=10 // mudou para o tipo number

Exemplo 3 - tipo let:
function teste(){
       if (true){
       let nome="Bruno"
       console.log("dentro do if do teste: " + nome)
       }
      console.log ("dentro de teste: " + nome)
      // vai ocorrer um erro na linha 27, pois está tentando acessar à variável let fora do escopo
}
teste()
console.log("fora de teste: " + nome)
Exemplo 4 - tipo const:
const curso= "JavaScript"
curso= "HTML" // vai gerar um erro, pois a const curso já foi definida anteriormente
*/