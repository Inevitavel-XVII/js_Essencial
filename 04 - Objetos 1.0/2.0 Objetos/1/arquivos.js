const f_tipoMilitar=document.querySelector("#f_Militar")
const f_tipoNormal=document.querySelector("#f_tipoNormal")
const f_blindagem=document.querySelector("#f_blindagem")
const f_municao=document.querySelector("#f_municao")
const f_nome=document.querySelector("#f_nome")
const f_portas=document.querySelector("#f_portas")
const carros=document.querySelector("#carros")
const btn_addCarro=document.querySelector("#btn_addCarro")

let a_carros=[] // sem o array, o programa ia esquecer os dados criados

// se você clicar no botão militar, ativa os inputs blindagem e munição
f_tipoMilitar.addEventListener("click",()=>{
  f_nome.value=""
  f_portas.value=0
  f_blindagem.value=0
  f_municao.value=0
  f_blindagem.removeAttribute("disabled")
  f_municao.removeAttribute("disabled")
})

// se você clicar no botão normal, desativa os inputs blindagem e munição
f_tipoNormal.addEventListener("click",()=>{
  f_blindagem.value=0
  f_municao.value=0
  f_blindagem.setAttribute("disabled","disabled")
  f_municao.setAttribute("disabled","disabled")
})


const gerenciarExibicaoCarros=()=>{
  carros.innerHTML=""
  a_carros.forEach((c)=>{
    const div=document.createElement("div")
    div.setAttribute("class","carro")
    div.innerHTML=`Nome: ${c.nome}<br/>`
    div.innerHTML+=`Portas: ${c.portas}<br/>`
    div.innerHTML+=`Cor: ${c.cor}<br/>`
    div.innerHTML+=`Blindagem: ${c.blindagem}<br/>`
    div.innerHTML+=`Muniçao: ${c.municao}<br/>`
    carros.appendChild(div)
  })
}

// 
btn_addCarro.addEventListener("click",()=>{
  if(f_tipoNormal.checked){
    const c=new Carro(f_nome.value,f_portas.value)
    a_carros.push(c)
  }else{
    const c=new Militar(f_nome.value,f_portas.value,f_blindagem.value,f_municao.value)
    a_carros.push(c)
  }
  gerenciarExibicaoCarros()
})




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

class Utilitario extends Carro{
  constructor(nome,portas,lugares){
    super(nome,portas)
    this.lugares=lugares
  }
}

const c1=new Carro("Normal",4)
c1.ligar()
c1.setCor("Preto")

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