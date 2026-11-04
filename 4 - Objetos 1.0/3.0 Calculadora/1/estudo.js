/*
###CONVERSÕES JSON EM OBJETOS E VICE-VERSA

JSON é um formato de texto usado para representar dados. Ele é uma string com estrutura específica, por exemplo:
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
###Objeto JS###
const pessoa={
   nome:"André"
}

-Você consegue acessar propriedades.
-Usar métodos.
-Alterar Valores.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
###JSON###
`{"nome":"André"}`

-Isso é apenas texto, você não consegue acessar as propriedades porque ainda não é um objeto. Isso só seria possível se você usasse JSON.parse()
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
###POR QUE JSON EXISTE?###

Existe diversos tipos de sistemas pelo mundo e muita deles precisam se conectar através de uma rede de dados. JSON permite que os sistemas possam "conversar" entre si
###EXEMPLO###
- navegador <-> servidor
- app <-> api
- frontend <-> backend

-----> JSON virou "idioma" universal entre troca de dados <------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
###REGRAS###
As chaves precisam de aspas:
-Correto:{"nome":"Bruno"}
-Errado:{nome:Bruno}
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
###TIPOS ACEITOS###
-números
-string
-boleanos
-null
-arrays
-objetos
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
###JSON não aceita###
-funções
-métodos
-undefined
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
###CÓDIGO DA AULA###
const pessoa={
  nome:"Bruno",
  canal:"CBF Cursos",
  curso:"JavaScrpit",
  aulas:{
    aula01:"Introdução",
    aula02:"Variáveis",
    aula03:"Condicional"
  }
}

const string_pessoa=`{"nome":"Bruno","canal":"CBF Cursos","curso":"JavaScrpit","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}`

const s_json_pessoa=JSON.stringify(pessoa) // converte objeto em string JSON
const o_json_pessoa=JSON.parse(string_pessoa) // converte string JSON em objeto

console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
###MEMBROS STATIC EM JAVASCRIPT###
Um membro static pertence à classe em si e não aos objeetos criados por ela.

###EXEMPLO###

.Membro Normal
class Carro{
  constructor(modelo){
    this.modelo = modelo
  }
}

const c1 = new Carro("Fusca")

console.log(c1.modelo)

- Cada objeto tem seu própio valor.

.Membro static

class Carro{
  static rodas = 4
}

console.log(Carro.rodas)

Não precisa criar objeto.

###Quando usar static?###

Use quando algo faz sentido para a classe inteira, e não para um objeto específico.

Exemplos:

.utilidades
.configurações globais
.contadores
.fábricas de objetos
.métodos auxiliares

###Exemplo Clássico: contador de instâncias###
class Usuario{
  static total = 0

  constructor(nome){
    this.nome = nome
    Usuario.total++
  }
}

new Usuario("André")
new Usuario("Carlos")

console.log(Usuario.total) // 2

- O contador pertence à classe, não aos usuários individuais.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
###CÓDIGO DA AULA###
class Npc{
  static alerta=false
  constructor(energia){
    this.energia=energia
  }
  info=function(){
    console.log(`Energia: ${this.energia}`)
    console.log(`Alerta: ${Npc.alerta?"Sim":"Não"}`)
    console.log(`---------------------------------`)
  }
  static alerta=function(){
    Npc.alerta=true
  }
}

const npc1=new Npc(100)
const npc2=new Npc(80)
const npc3=new Npc(30)

Npc.alerta()

npc1.info()
npc2.info()
npc3.info()
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
###CONCEITO PROTOTYPE###
É um objeto associado a funções contrutoras usado para:
- compartilhar métodos
- compartilhar propriedades
- criar herança

Para que serve?
O prototype existe para:
- Economizar memória.
- Compartilhar métodos.
- Criar herança.
- Evitar duplicação.

Sem prototype:

function Pessoa(nome{
 this.nome=nome
 this.falar=function(){
 console.log("Olá")
 }
})

const p1= new Pessoa("André")
const p2= new Pessoa("Carlos")

Cada objeto criado terá uma cópia nova da função falar.
- Existe uma função falar em p1
- Existe outra função falar em p2
Isso gasta memória.

Com prototype:

function Pessoa(nome){
 this.nome=nome
}

Pessoa.prototype.falar=function(){
 console.log("Olá")
}

Agora:
- a função existe apenas uma vez
- todos os objetos compatilham ela

Classe usam prototype?(Sim)

class Pessoa{
 falar(){
   console.log("Olá") 
 }
}

Internamente vira algo parecido com:

Pessoa.prototype.falar=function(){
 console.log("Olá")
}


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
###CÓDIGO DA AULA###
const Nave=function(energia){
  this.energia=energia
  this.disparo=3
}

const n1=new Nave(100)

Nave.prototype.vidas=3
Nave.prototype.disparar=function(){
  if(this.disparos > 0){
    this.disparos--
  }
}

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()

console.log(Nave)
console.log(n1)
console.log(n1.disparos)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
###ABSTRACT###
class CarroPadrao{
  // está usando o conceito abstract
  constructor(){
    if(this.construtor===CarroPadrao){
      throw new TypeError('Esta classe não pode ser instânciada')
    }else if(this.ligar===undefined){
      throw new TypeError("É obrigatório implementar o método ligar")
    }else if(this.desligar===undefined){
      throw new TypeError("É obrigatório implementar o método desligar")
    }
    this.rodas=4
    this.portas=4
    this.ligado=false
  }
}

class Carro extends CarroPadrao{
  constructor(tipo,estagioTurbo){
    super()
    this.turbo=new Turbo(estagioTurbo)
    if(tipo==1){
      this.velMax=120
      this.nome="normal"
    }else if(tipo==2){
      this.velMax=160
      this.nome="esportivo"
    }else if(tipo==3){
      this.velMax=200
      this.nome="super esportivo"
    }
    this.velMax+=this.turbo.pot
  }
  info(){
    console.log(this.nome)
    console.log(this.velMax)
    console.log(this.turbo)
    console.log(this.rodas)
    console.log(this.portas)
    console.log(this.ligado)
    console.log(`-----------------`)
  }
  ligar(){
    this.ligado=true
    this.ligado= true
  }
  desligar(){}
}

class Turbo{
  constructor(e){
    if(e==0){
      this.pot=0
    }else if(e==1){
      this.pot=50
    }else if(e==2){
      this.pot=75
    }else if(e==3){
      this.pot=100
    }
  }
}


class CarroEspecial extends Carro{
  constructor(estagioTurbo){
    super(4,estagioTurbo)
    this.tipoInfo=1
    this.velMax=300+this.turbo.pot
    this.nome="Carro especial"
  }
  info(){
    if(this.tipoInfo==1){
      super.info()
    }else{
      console.log(`Nome...:${this.nome}`)
      console.log(`Vel.Max:${this.velMax}`)
      console.log(`Turbo:${this.turbo.pot}`)
      console.log(`-----------------------`)
    }
  }
}

const c1=new Carro(1,0)
const c2=new Carro(1,1)
const c3=new CarroEspecial(3)
// const c4=new Carro()

c1.info()
c2.info()
c3.info()
###CONCEITO DE ABSTRACT###
É uma classe que não pode ser instânciada por um objeto, mas pode ser uma classe pai com classe filhas.
//---------------------------------------------------------------------------------------------------------------------
const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const teclasRes=document.querySelector(".res")
const display=document.querySelector(".display")
const ton=document.getElementById("ton")
const tlimpar=document.getElementById("tlimpar")

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*para cada elemento é adicioando o evento de click*/
// evt.target é o botão clicado e innerHTML obtém seu conteúdo, que é acrescentado ao conteúdo atual do display
// display.innerHTML serve para ler ou alterar o conteúdo que está dentro do elemento armazenado na variável
// teclasNum.forEach((el)=>{
//   el.addEventListener("click",(evt)=>{
//     display.innerHTML+=evt.target.innerHTML
//   })
// })

// teclasOp.forEach((el)=>{
//   el.addEventListener("click",(evt)=>{
//     display.innerHTML+=evt.target.innerHTML
//   })
// })
// //---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // botão limpar. ele vai apagar todos os números do display transformando o innerHTML em "0"
// tlimpar.addEventListener("click",(evt)=>{
//   display.innerHTML="0"
// })
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//CÓDIGO DA AULA
// const teclasNum=[...document.querySelectorAll(".num")]
// const teclasOp=[...document.querySelectorAll(".op")]
// const teclasRes=document.querySelector(".res")
// const display=document.querySelector(".display")
// const ton=document.getElementById("ton")
// const tlimpar=document.getElementById("tlimpar")
// const tigual=document.getElementById("tigual")

// let sinal=false
// let decimal=false
// //---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// /*para cada elemento é adicioando o evento de click*/
// // evt.target é o botão clicado e innerHTML obtém seu conteúdo, que é acrescentado ao conteúdo atual do display
// // display.innerHTML serve para ler ou alterar o conteúdo que está dentro do elemento armazenado na variável
// teclasNum.forEach((el)=>{
//   el.addEventListener("click",(evt)=>{
//     sinal=false
//     if(evt.target.innerHTML==","){ // se você clicar no botão
//         if(!decimal){
//           decimal=true
//           if(display.innerHTML=="0"){ // se o display for 0, ao apertar a vígula o valor dele passa a ser "0,"
//             display.innerHTML="0,"
//           }else{
//             display.innerHTML+=evt.target.innerHTML
//           }
//         }  
//     }else{
//       if(display.innerHTML=="0"){ // se haver o valor 0 no display e você apertar um botão de operação, o valor fica vazio
//         display.innerHTML="" // o valor fica vazio
//       }
//       display.innerHTML+=evt.target.innerHTML
//     }
//   })
// })

// teclasOp.forEach((el)=>{
//   el.addEventListener("click",(evt)=>{
//     if(!sinal){ // se sinal for false
//       sinal=true // então, sinal vai ter o valor true
//       //if 1
//       if(display.innerHTML=="0"){ // se haver o valor 0 no display e você apertar um botão de operação, o valor fica vazio
//         display.innerHTML="" // o valor fica vazio
//       }
//       //if 2
//       if(evt.target.innerHTML=="x"){ // se você clicar no botão x(vezes), o valor no display será "*"
//         display.innerHTML+="*"
//       }else{
//         display.innerHTML+=evt.target.innerHTML
//       }
//     }
//   })
// })
// /*
// quando você clica no botão de operador, let sinal=false passa a ser true. se você clicar no botão novamente, o fato dele ser true não permite que ele seja adicionado.
// pois o if() só funciona se "sinal=false"
// */
// //---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // botão limpar. ele vai apagar todos os números do display transformando o innerHTML em "0"
// tlimpar.addEventListener("click",(evt)=>{
//   sinal=false
//   decimal=false
//   display.innerHTML="0"
// })
// //---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// tigual.addEventListener("click",(evt)=>{
//   sinal=false
//   decimal=false
//   const res=eval(display.innerHTML)
//   display.innerHTML=res
// })
// /*
// eval() é uma função nativa do javascript que recebe uma string e executa-a como código javascript. É como se o java script pegasse um texto e interpretasse-o como um 
// código. Quase nunca é usado, ele gera erros, performance ruim - os motore v8(chrome) quando encontram eval() assumem que qualquer parte do código pode ser alterada di
// namicamente e isso impede várias otimizações deixando o programa mais lento. Ele é usado sempre em projetos de calculadora
// */
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
###Método Eval###
eval() é uma função nativa em JavaScript que recebe uma string e executa essa sting como código JavaScript.

EXEMPLO 1:
eval("console.log('Olá Mundo')");
RESULTADO:
Olá Mundo

É como se o JavaScript pegasse o texto e interpretasse aquilo como código real
(dúvida - eval() faz parte do script de js ou das api existentes dele?)

.Como funciona?
EXEMPLO 2:
let x = 10;
let y = 20;

eval("console.log(x + y)");
resultado: 30

EXEMPLO 3:
let expressao = "10 + 5 * 2";

let resultado = eval(expressao);

console.log(resultado);
resultado: 20

.QUANDO DEVO USAR?
Na prática moderna: QUASE NUNCA. É raro encontrar uma situação em que eval() seja a melhor solução. A própria documentação da MDN Web Docs recomenda evitar seu uso
.Por que ele é perigoso?
-Imagine que um usuário digite:

let entrada = prompt("Digite uma expressão:");

eval(entrada);

-Se o usuário escrever:
alert("hakeado")
O código será executado.

Ou pode ser algo pior:
while(true){}
Isso trava a página.

Ou:
document.body.innerHTML = "";
Apaga todo o conteúdo da tela.

O problema de usar o eval() é que você vai estar executando o código de uma fonte externa.

Problema de performance:
Motores JavaScript como o v8(chrome) fazem várias otimizações. Quando encontram eval(), eles precisam assumir que qualquer parte do código pode ser alterada 
dinamicamente.

.O que um programador profissional faz?

Se um desenvolvedor experiente vê algo assim:

eval(codigo);

a primeira pergunta costuma ser:

"Existe outra forma de resolver isso sem executar código dinâmico?"

Na maioria das vezes a resposta é sim.

Por isso, em aplicações modernas de produção, encontrar eval() é relativamente raro e geralmente considerado um sinal de alerta para revisar o código.

Regra prática: aprenda o que eval() faz para entender código legado, mas evite usá-lo em projetos novos, a menos que exista uma necessidade muito específica e 
controlada.


###Uso do sinal=false###
É um conceito muito importante em programação: controle de estado.
Nesse código:
let sinal = false
A variável não está guardando um número nem um texto. Ela está guardando uma informação sobre o estado atual da calculadora.

Você pode ler assim:

sinal=false
"Posso inserir um operador"

sinal=true
"Acabei de inserir um operador, então não posso inserir outro"

.O que é um estado?
Estado é qualquer informação que representa a situação atual de um programa
EXEMPLO 1:

login:
let logado = false

Quando o usuário faz login:
logado=true

Agora o sistema sabe que ele pode acessar páginas restritas e/ou coisas que são possíveis quando o usuário está logado.

.O que o sinal está impedindo?
Sem ele, seria possível fazer:
5+++++++++3 (algo que não tem lógica em uma calculadora)

ou:
10----+***+++///2
Cada clique em um operador seria adicionado ao display

.Por que usar booleanos para estado é tão comum?

Porque muitas situações possuem apenas duas possibilidades:

ligado/desligado
aberto/fechado
verdadeiro/falso
ativo/inativo
carregando/não carregando

EXEMPLO:
let carregando=false

Quando uma requisição começa:
carregando=true
Quando termina:
carregando=false

.O que você deve absorver de mais importante?
###A lição mais importante não é false ou o true. É entender que "variáveis podem representar regras do sistema, e não apenas dados"

let logado = true
let carregando = false
let menuAberto = true
let sinal = false
let decimal = true

-Essas variáveis controlam o comportamento do programa.



*/