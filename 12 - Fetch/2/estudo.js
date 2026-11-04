/*
------------------------------------------------------                ESCUTA ATIVA                 --------------------------------------------------------------------
Fetch serve para ler arquivos e o consumo ou envio de informações para api


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
*/
