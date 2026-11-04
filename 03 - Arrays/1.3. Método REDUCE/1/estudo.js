const p_array=document.querySelector("#array")
const btnReduzir=document.querySelector("#btnReduzir")
const resultado=document.querySelector("#resultado")

const elementos_array=[1,2,3,4,5]
let ant=[]
let atu=[]
let dobro=[]
p_array.innerHTML="["+ elementos_array +"]"

btnReduzir.addEventListener("click",(evt)=>{
    dobro.push(elementos_array[0]*2)
    resultado.innerHTML=elementos_array.reduce((anterior,atual,posicao)=>{
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2)
        return atual+anterior
    })
    resultado.innerHTML+="<br/>V.anterior:"+ant+"<br/>V.atual:"+atu+"<br/>V.Dobro:"+dobro         
})
/*
.O que é o médoto reduce()?

O método reduce() em javascript é usado para transformar um array em um único valor final, pecorrendo todos os elementos e acumulando um resultado.
--------------------------------------------------------------------------------------------------------------------------------------------------------------
- SOMAR VALORES:
const numeros = [1, 2, 3, 4];

const soma = numeros.reduce((acumulador, próximo) => {
  return acumulador + próximo;
}, 0);

console.log(soma); // 10
--------------------------------------------------------------------------------------------------------------------------------------------------------------
- CONCATENAR STRINGS
const palavras = ["Olá", "mundo", "!"];

const frase = palavras.reduce((acc, palavra) => {
  return acc + " " + palavra;
});

console.log(frase); // "Olá mundo !"
--------------------------------------------------------------------------------------------------------------------------------------------------------------
- CONTAR OCORRÊNCIAS:
const frutas = ["maçã", "banana", "maçã", "laranja", "banana"];

const contagem = frutas.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1; //
  return acc;
}, {});

console.log(contagem);
// { maçã: 2, banana: 2, laranja: 1 }
// Lógica do código: se a fruta existe, soma +1. se não existe, criar fruta com valor +1. (esse criar fruta é "adicionar/atualizar" o objeto fruta)

############################################# EXTREMAMENTE IMPORTANTE #########################################################################################

Esse padrão de contador/frequência é bastante comum no dia a dia
.1: Contar letras em uma palavra (usado em problemas de lógicas - anagramas)
const palavra = "banana";

const contagem = palavra.split("").reduce((acc, letra) => {
  acc[letra] = (acc[letra] || 0) + 1;
  return acc;
}, {});

console.log(contagem);
// { b: 1, a: 3, n: 2 }

.2: Contar votos (simulação de eleição)
const votos = ["Ana", "Carlos", "Ana", "João", "Carlos", "Ana"];

const resultado = votos.reduce((acc, nome) => {
  acc[nome] = (acc[nome] || 0) + 1;
  return acc;
}, {});

console.log(resultado);
// { Ana: 3, Carlos: 2, João: 1 }

.3: Contar produtos em um carrinho (comum em e-commerce)
const carrinho = ["camisa", "calça", "camisa", "tenis", "camisa"];

const resumo = carrinho.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log(resumo);
// { camisa: 3, calça: 1, tenis: 1 }

.4: Agrupar pessoas por idade
const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Carlos", idade: 30 },
  { nome: "João", idade: 20 }
];

const agrupado = pessoas.reduce((acc, pessoa) => {
  const idade = pessoa.idade;

  if (!acc[idade]) {
    acc[idade] = [];
  }

  acc[idade].push(pessoa.nome);
  return acc;
}, {});

console.log(agrupado);
// { 20: ["Ana", "João"], 30: ["Carlos"] }

.5: Encontrar o elemento mais frequente(muito usado em análise de dados)
const numeros = [1, 2, 2, 3, 3, 3, 4];

const contagem = numeros.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

let maisFrequente = null;
let maior = 0;

for (let num in contagem) {
  if (contagem[num] > maior) {
    maior = contagem[num];
    maisFrequente = num;
  }
}

console.log(maisFrequente); // "3"

.6: Verificar se duas palavras são anagramas
function contar(str) {
  return str.split("").reduce((acc, letra) => {
    acc[letra] = (acc[letra] || 0) + 1;
    return acc;
  }, {});
}

const a = "amor";
const b = "roma";

console.log(JSON.stringify(contar(a)) === JSON.stringify(contar(b)));
// true
---- clássico de entrevista técnica

.7 Contar tipos de erros em logs
const logs = ["erro", "sucesso", "erro", "timeout", "erro"];

const contagem = logs.reduce((acc, tipo) => {
  acc[tipo] = (acc[tipo] || 0) + 1;
  return acc;
}, {});

console.log(contagem);
// { erro: 3, sucesso: 1, timeout: 1 }
--------------------------------------------------------------------------------------------------------------------------------------------------------------

Padrão mental (o mais importante)

Sempre que você ver:

“quantas vezes aparece”
“frequência”
“contagem”
“agrupar por”

👉 Pode pensar direto em:

acc[item] = (acc[item] || 0) + 1;

--------------------------------------------------------------------------------------------------------------------------------------------------------------
############################################# EXTREMAMENTE IMPORTANTE #########################################################################################



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
.Onde está a função callback dentro do fluxo de execução?######## IMPORTANTE DEIXAR ANOTADO!!
*/