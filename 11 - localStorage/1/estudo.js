/*
O que é webStorage?
É o mecanismo do navegador que permite o JavaScript guardar dados no computador do usuário, associados ao site que está sendo usado.
- localStorage:
Quarda os dados de forma persistente

- sessionStorage:
Quarda os dados temporáriamente enquanto a aba estiver aberta

Os 2 possuem os mesmo métodos:
- setItem: Quarda um valor
localStorage.setItem("nome", "André");

getItem: Obtém um valor
const nome = localStorage.getItem("nome");

removeItem: Remove uma informação específica
localStorage.removeItem("nome");

clear: apaga tudo que está dentro do storage
localStorage.clear();

key: permite acessar uma chave pela posição
localStorage.key(0);

###Tudo é armazenado como string###

Se você fizer:
localStorage.setItem("idade", 30);

O navegador não mantém o 30 como número, ele armazena: "30"

ou seja:
const idade = localStorage.getItem("idade");

console.log(typeof idade);
resultado: string

Portanto, é importante transformar novamente em número:
const idade = Number(localStorage.getItem("idade"));

Se você escrever typeof idade, o resultado será number.

.E se eu quiser guardar um objeto?

Aqui aparece uma situação muito comum.

Você não pode simplesmente fazer:

const pessoa = {
    nome: "André",
    idade: 30
};


localStorage.setItem("pessoa", pessoa);

Porque o Web Storage trabalha com strings.

Você deve transformar o objeto em JSON:

const pessoa = {
    nome: "André",
    idade: 30
};


localStorage.setItem("pessoa", JSON.stringify(pessoa));

Agora ele consegue armazenar.

Para recuperar:

const pessoa = JSON.parse(
    localStorage.getItem("pessoa")
);
###Por que tem que usar JSON.parse dentro da variável? você pode me dar mais exemplos?###
Voltamos a ter um objeto:

console.log(pessoa.nome);

Resultado:

André

Esse é um uso muito comum de localStorage.

.Imagine que o navegador tenha duas gavetas:

┌──────────────────────────┐
│        NAVEGADOR         │
│                          │
│  ┌────────────────────┐  │
│  │   localStorage     │  │
│  │                    │  │
│  │ "tema" = "escuro"  │  │
│  └────────────────────┘  │
│                          │
│  ┌────────────────────┐  │
│  │  sessionStorage    │  │
│  │                    │  │
│  │ "etapa" = "2"      │  │
│  └────────────────────┘  │
└──────────────────────────┘

localStorage: "guarde isso para quando eu voltar."

sessionStorage: "guarde isso enquanto esta sessão estiver acontecendo."

E ambos fazem parte da Web Storage API.

Uma observação importante: em aplicações reais, não coloque senhas, tokens sensíveis ou outros dados secretos no localStorage só porque ele parece uma "gaveta" 
segura. JavaScript rodando na página pode acessar esses valores.

*/