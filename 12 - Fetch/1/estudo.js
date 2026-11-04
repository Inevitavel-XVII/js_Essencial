// ###servidor###
var http=require('http');
http.createServer(function(req, res){
    
    res.setHeader('Access-Control-Allow-Origin','*');
    res.writeHead(200, {'Content-Type': 'application/json'});

    let numero = {
        valor: Math.round(Math.random() *10)
    }

    res.end(JSON.stringify(numero));
}).listen(8080)

/*
------------------------------------------------------                ESCUTA ATIVA                 --------------------------------------------------------------------
Fetch serve para ler arquivos e o consumo ou envio de informações para api

const endpoint="https://mgzncq-8080.csb.app/"
fetch(endpoint)
.then(res=>res.text()) 
.then(dados=>{
    console.log(dados)
})

*/
/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
O que é fetch?
É uma api do js usada para fazer requisições HTTP, ou seja, para fazer seu código conversar com o servidor.
Pense da seguinte forma:
Seu JavaScript
     ↓
   fetch()
     ↓
   API/Servidor
     ↓
   Resposta
     ↓
Seu JavaScript

Você tem uma api que retorna:
{
    "nome": "André",
    "idade": 30
}

Seu código:

fetch("http://localhost:3000") // faça uma requisição para esse endereço
    .then(resposta => resposta.json()) // a resposta do servidor precisa ser transformada de JSON para objeto JS
    .then(dados => { // agora você tem dados e pode utilizá-los
        console.log(dados);
    });

Resultado:

{
    "nome": "André",
    "idade": 30
}
1 ---> fetch("http://localhost:3000")  ---> faz a requisição para o servidor
2 ---> .then(resposta => resposta.json()) ---> 
Se der certo, receba o resultado da requisição
A resposta são várias informações sobre comunicação HTTP, resposta.json transforma os dados em um JSON
3 --->.then(dados => {console.log(dados);}); ---> dados recebe o valor de "resultado"
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
####DÚVIDAS####

- 1.O que é servidor HTTP? 
É um programa que fica esperando requisições HTTP e responde a elas.
No seu caso, este programa é o servidor
    http.createServer(function(req, res) {
        // ...
    })

Imagine:
Seu navegador
     │
     │ requisição HTTP
     ▼
┌─────────────────┐
│ Servidor HTTP   │
│     Node.js     │
└─────────────────┘
     │
     │ resposta HTTP
     ▼
Seu navegador

Por exemplo, quando você faz:
fetch("http://localhost:8080")

o fetch() está dizendo:
"servidor, quero fazer uma requisição para você"

O servidor recebe essa requisição através do req e manda uma resposta através do res
- req = request = requisição
- res = response = resposta


- 2.O que é um módulo http? 
É um módulo incluso do Node.js

Quando você escreve:
var http = require('http');
você está carregando o módulo HTTP que já vem com o Node.js

O node possui vários módulosl:
Node.js
│
├── http
├── fs
├── path
├── os
├── url
└── ...

O http fornece funcionalidades para trabalhar com o protocolo HTTP.
Por exemplo:
http.createrServer(...)
vem desse módulo.

Então:
require('http')

significa aproximadamente:
"Node, me dê acesso às funcionalidades do módulo HTTP"


- 3.O que é setHeader()? 
É um método usado para adicionar/configurar um cabeçalho HTTP da resposta
Um cabeçalho http é uma informação que acompanha a resposta

Por exemplo:
Resposta HTTP
│
├── Status: 200
│
├── Content-Type: application/json
│
├── Access-Control-Allow-Origin: *
│
└── Corpo:
    {"valor":7}

No seu caso:
res.setHeader('Access-Control-Allow-Origin','*');
está adicionando Access-Control-Allow-Origin: * à resposta. Pense da seguinte forma "Quero colocar este cabeçalho na resposta"


- 4.O que é writeHead()? 
Usado para escrever informações principais do cabeçalho da resposta HTTP
No seu código:
res.writeHead(200, {
    'Content-Type': 'application/json'
});

"Minha resposta tem status 200 e estou informando algumas características do conteúdo que vou enviar"

###Informação importante###
Qual a diferença entre setHeader e writeHeader?

- setHeader() configura um cabeçalho individual:
res.setHeader('Nome', 'Valor');

- writeHead() envia/especifica o status da resposta e os cabeçalhos

res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
});
Você poderia colocar os dois cabeçalhos ali.

- 5.O que é CORS?
CORS significa Cross-Origin Resource Sharing, em português seria algo como Compartilhamento de recursos entre origens diferentes. É um mecanismo de segurança dos 
navegadores.

res.setHeader('Access-Control-Allow-Origin', '*');
Isso diz ao navegador:

"Minha API permite requisições vindas de qualquer origem."

O * significa qualquer origem.

- 6.Content-Type é um método de writeHead()?
writeHead é um método, content-type é o nome do cabeçalho.

- 7.O que é application/json? São métodos de content-type?

Content-Type        → nome do cabeçalho
application/json    → valor do cabeçalho

Significa, o conteúdo que estou enviando é um JSON

Existe vários tipos de conteúdo:

text/html --> conteúdo HTML
text/plain --> texto simples
application/json --> JSON


- 8.O que são essas portas(localhost)? elas são um espaço no servidor?(}).listen(8080))
localhost é uma porta por onde passa uma conexão de internet.

Uma porta é um número usado pelo sistema operacional para identificar um serviço de rede que está recebendo conexões.
                  COMPUTADOR
              ┌───────────────┐
              │               │
              │  PORTA 80     │
              │  PORTA 3000   │
              │  PORTA 8080   │
              │  PORTA 5500   │
              │  PORTA 5000   │
              │               │
              └───────────────┘
Por exemplo, você poderia ter:

porta 5500 → Live Server
porta 8080 → seu servidor Node

Então você poderia ter:

http://127.0.0.1:5500
                  ↑
             seu HTML

e:

http://127.0.0.1:8080
                  ↑
             sua API

Então o que exatamente acontece no .listen(8080)?

Quando você escreve:

}).listen(8080)

o Node está fazendo algo parecido com:

Sistema operacional:


"Tem algum programa querendo escutar a porta 8080?"


Node:


"Sim. Sou eu."


Sistema operacional:


"OK. Quando chegar uma conexão na porta 8080,
vou entregar essa conexão para o seu servidor."
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
O que é protocolo HTTP?
Access-Control-Allow-Origin é apenas uma string e o símbolo * é o que define o comportamento?

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
createServer() --> criar o servidor, é um método de "http"
req --> request --> a requisição que chegou ao servidor (recebe informação)
res --> response --> a resposta que o servidor vai mandar de volta(envia informação)

Navegador
   │
   │  requisição (req)
   ▼
Servidor Node
   │
   │  resposta (res)
   ▼
Navegador

1 - Liberando o CORS.

res.setHeader('Acess-Control-Allow-Origin', '*');

Essa linha diz:
"Permita que qualquer origem faça requisições para minha API."
O * significa qualquer origem.

Por exemplo, seu HTML pode estar em:
http://127.0.0.1:5500
E sua API em:
https://mgzncq-8080.csb.app

São origens diferentes. O navegador normalmente bloquearia a comunicação por causa do CORS

2 - Definindo o tipo da resposta.

res.writeHead(200, {'Content-Type':'application/jason'});

.200 é o status HTTP:
=>>> 200=ok (a requisição deu certo)

.Content-Type:
'Content-Type': 'application/json'
Você está avisando ao navegador:
"O conteúdo que estou enviando é JSON"
*/
