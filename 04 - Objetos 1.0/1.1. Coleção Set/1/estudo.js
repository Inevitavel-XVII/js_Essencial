const caixa=document.querySelector("#caixa")

let musicas= new Set(["musica1","musica boa","musica10"])

musicas.add("musica muito legal")
musicas.add("musica1")
musicas.add("musica1")
musicas.add("musica10")

musicas.delete("musica1")
// musicas.clear("")

console.log(musicas)

// musicas.array.forEach((el)=>{
//     caixa.innerHTML+=el +"<br/>"
// });

for (let m of musicas){
    caixa.innerHTML+= m + "<br/>"
}
/*
1- Array (vetor)
É a estrutura mais comum. Serve para armazenar lista de valores ordenados.

const frutas = ["maçã","banana","laranja"];

características:
- tem ordem(índice) => frutas[0]
- permite valores repetidos
- pode misturar tipos:
EXEMPLO: 

const misto = [1,"texto",true]

Quando devo usar?

- Importante usar quando você tiver uma lista simples
- A ordem importa


2 - Set (Coleção de valores únicos)
É uma coleção onde não pode ter valores repetidos

const numeros = new Set([1, 2, 2, 3]);

console.log(numeros); // {1, 2, 3}

Características:

- Não permite duplicados.
- Não tem índice direto: (set[0]) ---> isso não existe
- Iterável
- Possuí métodos

Quando usar?
- Quando você precisa garantir que não haja repetição
- Remover duplicadas de um array
EXEMPLO:

const unico = [...new Set([1,1,2,3])];

3 - MAP (chave -> valor)

É como um objeto, mas mais poderoso.

const pessoa = new Map();

pessoa.set("nome", "André")
pessoa.ser("idade", 30);

Características:

- Trabalha com pares chave - valor
- Aceita qualquer tipo como chave (até objeto)
- Mantém a ordem de inserção

####DIFERENÇA PARA OBJETO####

// Objeto
const obj = { nome: "André" };

// Map
const map = new Map();
map.set("nome", "André");

Quando usar?
- Precisa de chave dinâmica.
- Quer mais controle que um objeto


| Tipo           | O que é?             | Permite repetição? | Tem índice? | Uso principal              |
| -------------- | -------------------- | ------------------ | ----------- | -------------------------- |
| Array          | Lista ordenada       | ✅ Sim              | ✅ Sim       | Listas                     |
| Set            | Valores únicos       | ❌ Não              | ❌ Não       | Remover duplicados         |
| Map            | Chave → valor        | Depende da chave   | ❌ Não       | Estruturas tipo dicionário |
| TemplateString | String com variáveis | —                  | —           | Textos dinâmicos           |


Como pensar em Map?

Muitas pessoas pensam no map como apenas mais um objeto diferente. A melhor forma de pensar no map é:

ARRAY => LISTA
SET => LISTA SEM REPETIÇÃO
MAP => RELACIONAMENTO DE DADOS

Ou seja, o map é ideal quando existe uma ligação entre duas coisas. Um ótimo exemplo:
----------------------------------------------------------------------------------------------------------------------------------------------------------------
const usuarios = new Map();

usuarios.set(1, { nome: "André" });
usuarios.set(2, { nome: "Maria" });

console.log(usuarios.get(1)); 
// { nome: "André" }
----------------------------------------------------------------------------------------------------------------------------------------------------------------
Quando NÃO usar Map?

- Você só precisa de dados simples (use array)
- As chaves são fixas (use objeto)

Forma rápida de decidir

Pergunta pra você mesmo:

“Eu preciso acessar algo diretamente por uma chave?”

- Sim → Map
- Não → Array
*/