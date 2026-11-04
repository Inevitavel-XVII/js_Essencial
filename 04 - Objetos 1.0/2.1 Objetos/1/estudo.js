// class Pessoa{
//     constructor(pnome){
//         this.nome=pnome
//     }
// }

// let p1= new Pessoa(10)
// let p2= new Pessoa("Asdervardson")
// let p3= new Pessoa("Brenasclartel")

// console.log(p1.nome)
// console.log(p2.nome)
// console.log(p3.nome)
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
###OBJETO###
É uma estrutura usada para armazenar dados de uma forma organizada em pares {chave-valor}. São muito usados para representar algo do mundo real ou estruturas
muito complexas, por exemplo:

- Produto
- Usuário
- Carro
- Configuração

### Um objeto literal ###
const pessoa = {
  nome: "André",
  idade: 25,
  profissao: "Desenvolvedor"
}
----------------------------------------------------------------------------------------------------------------------------------------------------------------
nome, idade, profissao → são as chaves
"André", 25, "Desenvolvedor" → são os valores
----------------------------------------------------------------------------------------------------------------------------------------------------------------
### Como acessar dados? ###

console.log(pessoa.nome)      // André
console.log(pessoa["idade"])  // 25
----------------------------------------------------------------------------------------------------------------------------------------------------------------
### Como modificar? ###

pessoa.idade = 26
pessoa.cidade = "Belém"

console.log(pessoa)
----------------------------------------------------------------------------------------------------------------------------------------------------------------
### Objetos com funções (métodos) ###

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ligar: function() {
    console.log("Carro ligado")
  }
}

carro.ligar()
----------------------------------------------------------------------------------------------------------------------------------------------------------------
###CLASSE###
É um molde para criar objetos com a mesma estrutura e comportamento. Você consegue reaproveitar código.
- Define propriedades (dados)
- Define métodos (ações)

###EXEMPLO###
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome}`
  }
}
----------------------------------------------------------------------------------------------------------------------------------------------------------------
### Por uqe classes foram criadas? ###
- Organização e reaproveitamento de código
----------------------------------------------------------------------------------------------------------------------------------------------------------------
### O que uma classe resolve? ###
- Reutilização: Você cria vários objetos sem repetir o código:
const p1 = new Pessoa("Ana", 20)
const p2 = new Pessoa("Carlos", 30)
- Organização:
- Abstração: Você pensa em "Pessoa" como um conceito, não só dados soltos.
----------------------------------------------------------------------------------------------------------------------------------------------------------------
### Exemplos reais ###

1 - Produto (e-commerce)

class Produto {
  constructor(nome, preco) {
    this.nome = nome
    this.preco = preco
  }

  desconto(valor) {
    this.preco -= valor
  }
}

const p = new Produto("Notebook", 3000)
p.desconto(500)

console.log(p.preco) // 2500

2 - Usuário (sistema)

class Usuario {
  constructor(email, senha) {
    this.email = email
    this.senha = senha
  }

  login() {
    console.log("Usuário logado")
  }
}

3 - Jogo

class Personagem {
  constructor(nome, vida) {
    this.nome = nome
    this.vida = vida
  }

  atacar() {
    console.log(`${this.nome} atacou!`)
  }
}

###Conclusão###
Classe = molde de objetos
Serve pra organizar, reutilizar e estruturar código
Muito usada sim, principalmente em sistemas maiores
Mas divide espaço com programação funcional no JS moderno
----------------------------------------------------------------------------------------------------------------------------------------------------------------
### O que é o método construtor? ###
É um método especial executado automaticamente quando você cria um novo objeto a partir da classe
*/
// class Carro{
//   canal="CBF Cursos"
//   constructor(pnome,ptipo){
//     this.nome=pnome
//     this.canal="Youtube"
//     if(ptipo==1){
//       this.tipo="Esportivo"
//       this.velmax=300
//     }else if(ptipo==2){
//       this.tipo="Utilitário"
//       this.velmax=100
//     }else if(ptipo==3){
//       this.tipo="Passeio"
//       this.velmax=160
//     }else{
//       this.tipo="Militar"
//       this.velmax=180
//     }
//   }
//   getNome(){
//     return this.nome
//   }
//   getTipo(){
//     return this.tipo
//   }
//   getVelMax(){
//     return this.velmax
//   }
//   getInfo(){
//     return [this.nome,this.tipo,this.velmax]
//   }
//   setNome(nome){
//     return this.nome=nome
//   }
//   setTipo(tipo){
//     return this.tipo=tipo
//   }
//   setVelmax(velmax){
//     return this.velmax=velmax
//   }
//   info(){
//     console.log(`Nome.: ${this.nome}`)
//     console.log(`Tipo.: ${this.tipo}`)
//     console.log(`V.Max.: ${this.velmax}`)
//     console.log(`----------------------`)
//   }
// }

// let c1=new Carro("Rapidão",1)
// let c2=new Carro("Super Luxo",2)
// let c3=new Carro("bombadão",4)
// let c4=new Carro("Carrego Tudo",3)

// c1.setNome("Super Veloz")
// c1.setVelmax(500)

// c1.info() // retorna todas as propriedades do objeto, porque você definiu essa função dentro da classe
// os métodos 'set' que você criou dentro do objeto, eles alteram o valor da propiedade.
// você criou uma classe, trabalhou com métodos que você criou e usou esses métodos. você está vendo na íntegra a programação oritentada a objetos
//c2.info()
//console.log(c1.getInfo()[0])
//------------------------------------------------------------------------------------------------------------------------------------------------------------

// class Pessoa{
//   constructor(pnome,pidade){
//     this.nome=pnome
//     this.idade=pidade
//   }
//   getNome(){
//     return this.nome
//   }
//   getidade(){
//     return this.idade
//   }
//   setNome(nome){
//     return this.nome=nome
//   }
//   setidade(idade){
//     return this.idade=idade
//   }
//   info(){
//     console.log(`Nome..: ${this.nome}`)
//     console.log(`Idade.: ${this.idade}`)
//     console.log(`----------------------`)
//   }
// }

// let pessoas=[]

// const btn_add=document.querySelector("#btn_add")
// const res=document.querySelector(".res")

// const addPessoa=()=>{
//     res.innerHTML="" // apaga tudo o que está escrito dentro de res
//     pessoas.map((p)=>{ // essa função vai criar elementos na página usando aquilo que foi escrito no input pelos usuários
//         const div=document.createElement("div") // cria um elemento 'div'
//         div.setAttribute("class", "pessoa") // cria o atributo classe="pessoa"
//         div.innerHTML=`Nome:${p.getNome()}<br/>Idade:${p.getidade()}` // dentro da div ele cria um texto 
//         res.appendChild(div) // adiciona o elemento div dentro de "res"
//     })
// }

// btn_add.addEventListener("click",()=>{
//     const nome=document.querySelector("#f_nome")
//     const idade=document.querySelector("#f_idade")
//     const p=new Pessoa(nome.value,idade.value) // cria o um objeto a partir da classe pessoa 
//     pessoas.push(p) // adiciona o novo objeto no array
//     nome.value="" // apaga o que tá escrito dentro do input após o click
//     idade.value="" // apaga o que tá escrito dentro do input após o click
//     nome.focus() // o cursor volta para "nome" após o click
//     console.log(pessoas)
//     addPessoa() // executa a função de criar elementos na página
// })
//------------------------------------------------------------------------------------------------------------------------------------------------------------
// function Pessoa(pnome,pidade){
//     this.nome=pnome,
//     this.idade=pidade,

//   this.getNome=function(){
//     return this.nome
//   },
//   this.getidade=function(){
//     return this.idade
//   },
//   this.setNome=function(nome){
//     return this.nome=nome
//   },
//   this.setidade=function(idade){
//     return this.idade=idade
//   },
//   this.info=function(){
//     console.log(`Nome..: ${this.nome}`)
//     console.log(`Idade.: ${this.idade}`)
//     console.log(`----------------------`)
//   }
// }

// let pessoas=[]

// const btn_add=document.querySelector("#btn_add")
// const res=document.querySelector(".res")

// const addPessoa=()=>{
//     res.innerHTML=""
//     pessoas.map((p)=>{
//         const div=document.createElement("div")
//         div.setAttribute("class", "pessoa")
//         div.innerHTML=`Nome:${p.getNome()}<br/>Idade:${p.getidade()}`
//         res.appendChild(div)
//     })
// }

// btn_add.addEventListener("click",()=>{
//     const nome=document.querySelector("#f_nome")
//     const idade=document.querySelector("#f_idade")
//     const p=new Pessoa(nome.value,idade.value)
//     pessoas.push(p)
//     nome.value=""
//     idade.value=""
//     nome.focus()
//     console.log(pessoas)
//     addPessoa()
// })
//------------------------------------------------------------------------------------------------------------------------------------------------------------
// class Carro{
//   constructor(nome,portas){
//     this.nome=nome
//     this.portas=portas
//     this.ligado=false
//     this.vel=0
//     this.cor=undefined
//   }
//   ligar=function(){
//     this.ligado=true
//   }
//   desligar=function(){
//     this.desligado=false
//   }
//   setCor=function(cor){
//     this.cor=cor
//   }
// }

// class Militar extends Carro{
//   constructor(nome,portas,blindagem,municao){
//     super(nome,portas)
//     this.blindagem=blindagem
//     this.municao=municao
//     this.setCor("Verde")
//   }
//   atirar=function(){
//     if(this.municao > 0){
//       this.municao--
//     }
//   }
// }

// class Utilitario extends Carro{
//   constructor(nome,portas,lugares){
//     super(nome,portas)
//     this.lugares=lugares
//   }
// }

// const c1=new Carro("Normal",4)
// c1.ligar()
// c1.setCor("Preto")

// const c2=new Militar("Lutador",1,100,50)
// //c2.setCor("Azul")

// c2.atirar()
// c2.atirar()
// c2.atirar()
// c2.atirar()
// c2.atirar()

// console.log(`Nome:${c1.nome}`)
// console.log(`Portas:${c1.portas}`)
// console.log(`Ligado:${c1.ligado? "Sim":"Não"}`)
// console.log(`Velocidade:${c1.vel}`)
// console.log(`Cor:${c1.cor}`)
// console.log(`Lugares:${c1.lugares}`)
// console.log(`---------------`)

// console.log(`Nome:${c2.nome}`)
// console.log(`Portas:${c2.portas}`)
// console.log(`Ligado:${c2.ligado? "Sim":"Não"}`)
// console.log(`Velocidade:${c2.vel}`)
// console.log(`Blindagem:${c2.blindagem}`)
// console.log(`Muniçao:${c2.municao}`)
// console.log(`Cor:${c2.cor}`)
// console.log(`---------------`)
 
// É usado uma classe pai e as classes filhas que acessam a classe pai através do extends. O método super() é uma 
// forma de acessar o this.nome e this.portas da classe pai. O super() chama o construtor da classe pai e o uso
// do "this" não pode ser usado antes do super - se isso ocorrer, vai dar erro no código.
//------------------------------------------------------------------------------------------------------------------------------------------------------------
// acessando o dom através de query selector. dessa maneira é possível manipular os elementos da página e torná-los interativos
const f_tipoMilitar=document.querySelector("#f_Militar")
const f_tipoNormal=document.querySelector("#f_tipoNormal")
const f_blindagem=document.querySelector("#f_blindagem")
const f_municao=document.querySelector("#f_municao")
const f_nome=document.querySelector("#f_nome")
const f_portas=document.querySelector("#f_portas")
const carros=document.querySelector("#carros")
const btn_addCarro=document.querySelector("#btn_addCarro")

let a_carros=[] // sem o array, o programa ia esquecer os dados criados

// vai pecorrer os elementos do array e retornar um array com apenas os elementos que possuem a propriedade "nome" diferentes de "quem"
const removerCarro=(quem)=>{
  a_carros=a_carros.filter((el)=>{
    return el.nome!=quem
  })
}


// se você clicar no botão militar, ativa os inputs blindagem e munição
f_tipoMilitar.addEventListener("click",()=>{
  f_nome.value="" // o valor definido dentro do input fica vazio
  f_portas.value=0 // o valor definido dentro do input fica vazio
  f_blindagem.value=0 // o valor definido dentro do input fica vazio
  f_municao.value=0 // o valor definido dentro do input fica vazio
  f_blindagem.removeAttribute("disabled") // remove o atributo disabled
  f_municao.removeAttribute("disabled") // remove o atributo disabled
})

// se você clicar no botão normal, desativa os inputs blindagem e munição
f_tipoNormal.addEventListener("click",()=>{
  f_blindagem.value=0 // o valor definido dentro do input fica vazio
  f_municao.value=0 // o valor definido dentro do input fica vazio
  f_blindagem.setAttribute("disabled","disabled") // adiciona o atributo disabled - disabled deixa inativo o elemento
  f_municao.setAttribute("disabled","disabled") // adiciona o atributo disabled - disabled deixa inativo o elemento
})

// função geradora de elementos na página
const gerenciarExibicaoCarros=()=>{
  carros.innerHTML="" // reseta todo os elementos dentro da div carros
  a_carros.forEach((c)=>{
    const div=document.createElement("div") // cria uma div
    const btn=document.createElement("button") // cria um botão
    div.setAttribute("class","carro")
    div.setAttribute("data-nome",c.nome) // data-nome ### conceito importante -> escrever sobre no arquivo estudo.js
    div.innerHTML=`Nome: ${c.nome}<br/>` // interpolação usando text + propriedades da classe carro(carro) ou a classe militar(filha)
    div.innerHTML+=`Portas: ${c.portas}<br/>` // interpolação usando text + propriedades da classe carro(carro) ou a classe militar(filha)
    div.innerHTML+=`Cor: ${c.cor}<br/>` // interpolação usando text + propriedades da classe carro(carro) ou a classe militar(filha)
    div.innerHTML+=`Blindagem: ${c.blindagem}<br/>` // interpolação usando text + propriedades da classe carro(carro) ou a classe militar(filha)
    div.innerHTML+=`Muniçao: ${c.municao}<br/>` // interpolação usando text + propriedades da classe carro(carro) ou a classe militar(filha)
    btn.innerHTML="remover" // é atribuido ao botão o nome "remover"
    btn.addEventListener("click",(evt)=>{ // aqui você está criando um evento no botão
      const quemRemover=evt.target.parentNode.dataset.nome // navegação pelo DOM + data-name sendo acessado através de dataset
      removerCarro(quemRemover) // nessa linha você está chamando a função removerCarro
      console.log(a_carros)
      gerenciarExibicaoCarros() // essa função vai servir para limpar os elementos existente e retornar apenas aqueles que estão de acordo com a função removerCarro()
    })
    div.appendChild(btn) // você está anexando o botão no elemento div
    carros.appendChild(div) // você está anexando a div dentro do elemento carros
  })
}

// botão comum controlado por js que se comporta igual a um submit - botão de formulário tradicional.
btn_addCarro.addEventListener("click",()=>{
  if(f_tipoNormal.checked){ // se tipo normal for selecionado, vai adicionar a class carro dentro do array "a_carro"
    const c=new Carro(f_nome.value,f_portas.value)
    a_carros.push(c)
  }else{
    const c=new Militar(f_nome.value,f_portas.value,f_blindagem.value,f_municao.value) //se não for do tipor normal, vai adicionar a class militar dentro do array "a_carro"
    a_carros.push(c)
  }
  gerenciarExibicaoCarros() // acessa a função geradora de elemensto html
})



//classe pai
class Carro{
  constructor(nome,portas){
    this.nome=nome
    this.portas=portas
    this.ligado=false
    this.vel=0
    this.cor=undefined
  }
  ligar=function(){
    this.ligado=true
  }
  desligar=function(){
    this.desligado=false
  }
  setCor=function(cor){
    this.cor=cor
  }
}

// classe filha
class Militar extends Carro{
  constructor(nome,portas,blindagem,municao){
    super(nome,portas)
    this.blindagem=blindagem
    this.municao=municao
    this.setCor("Verde")
  }
  atirar=function(){
    if(this.municao > 0){
      this.municao--
    }
  }
}
//classe filha
class Utilitario extends Carro{
  constructor(nome,portas,lugares){
    super(nome,portas)
    this.lugares=lugares
  }
}

// objeto criado a parti de uma classe
const c1=new Carro("Normal",4)
c1.ligar()
c1.setCor("Preto")

// objeto criado a parti de uma classe
const c2=new Militar("Lutador",1,100,50)
//c2.setCor("Azul")

c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Nome:${c1.nome}`)
console.log(`Portas:${c1.portas}`)
console.log(`Ligado:${c1.ligado? "Sim":"Não"}`)
console.log(`Velocidade:${c1.vel}`)
console.log(`Cor:${c1.cor}`)
console.log(`Lugares:${c1.lugares}`)
console.log(`---------------`)

console.log(`Nome:${c2.nome}`)
console.log(`Portas:${c2.portas}`)
console.log(`Ligado:${c2.ligado? "Sim":"Não"}`)
console.log(`Velocidade:${c2.vel}`)
console.log(`Blindagem:${c2.blindagem}`)
console.log(`Muniçao:${c2.municao}`)
console.log(`Cor:${c2.cor}`)
console.log(`---------------`)

//------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
###O QUE É DATA-NOME?###
É um atributo personalizadao do html
Ele faz parte dos chamados "data attributes" (data-*), usados para guardar informações extras em elementos html
###EXEMPLO###
<div data-nome="André"></div>

Nesse caso:
.data-(indica que é um atributo personalizado)
.nome(nome da informação)
."André"

###Para que isso serve?###
Serve para armazenar dados que podem ser usados pelo JS, CSS ou pela própia aplicação.
###EXEMPLO###
<button data-id="10">Comprar</button>

###Como acessar no JavaScript?###

HTML:
<div id="pessoa" data-nome="Carlos" data-idade="25"></div>

JS:
const pessoa = document.querySelector("#pessoa")

console.log(pessoa.dataset.nome)
console.log(pessoa.dataset.idade)

RESULTADO:
-Carlos
-25

###OBSERVAÇÃO###
Você não deve usar data-* para substituir atributos HTML que já existem.
O ideal é usar data-* apenas para armazenar informações personalizadas da aplicação.

Quando usar o data-?
Use quando o HTML precisa guardar algum dado extra para o JavaScript.
<button data-id="15"></button>
<div data-status="online"></div>
<li data-categoria="games"></li>

Regra prática

Use:

atributos HTML normais → para comportamento e semântica oficiais
data-* → para informações extras da aplicação


*/