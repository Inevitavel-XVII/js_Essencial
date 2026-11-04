// class Jogador{
//   constructor(nome){
//     this.nome=nome
//     this.id=Symbol()
//   }
// }

// let jogadores= [new Jogador("j1"), new Jogador("j2"), new Jogador("j3"), new Jogador("j4"), new Jogador("j1"), new Jogador("j3")]

// let s=[]

// let s_jogadores=jogadores.filter((j)=>{
//   return j.nome=="j1"
// })

// s=s_jogadores.map((j)=>{
//   return j.id
// })

// console.log(jogadores)
// console.log(s_jogadores)
// console.log(s)
const nome=Symbol("nome")
const numero=Symbol("numero")
const corUniforme=Symbol("cor do uniforme")

const Jogador={
  nome:"j1"
}

Jogador[numero]=10
Jogador[corUniforme]="amarelo"

for (p in Jogador){
  console.log(p)
}

console.log(Jogador)
console.log(Jogador[nome])
console.log(Jogador[numero])
console.log(Jogador[corUniforme])