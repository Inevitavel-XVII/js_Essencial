const numero=document.querySelector("#numero")

let promise=new Promise((resolve,reject)=>{
  let resultado=true // estado boleano
  let timeout=3000 // definição do tempo
  setTimeout(() => {
    if(resultado){
      resolve("Deu tudo certo")
    }else{
      reject("Deu tudo errado")
    }
  }, timeout);
})
// then é para o retorno positivo
promise.then((retorno)=>{
  numero.innerHTML=retorno
  numero.classList.remove("erro")// remove propriedade css "erro"
  numero.classList.add("ok")// adiciona propriedade css "ok"
})
// catch é para o retorno do erro
promise.catch((retorno)=>{
  numero.innerHTML=retorno
  numero.classList.add("erro")// adiciona propriedade css "erro"
  numero.classList.remove("ok")// remove propriedade css "ok"
})

numero.innerHTML="Processando..."
/*
.O que é o setTimeout?
É uma função do javaScript usada para agendar a execução de um código após um determinado tempo.
Sintaxe:
setTimeout(função, tempoEmMilissegundo)
Exemplo:
setTimeout(()=>{
  console.log("Olá")
}, 3000)

- O JavaScript lê o setTimeout
- Registra a função para ser executada DEPOIS, não antes, de 3000ms(3 segundos)
- Continua executando o restante do código sem parar.
- Quando o tempo termina, a função é colocada na fila de execução e será executada quando a pilha de execução estiver livre.

.Guadando o timeout:

setTimeout() retorna um identificador:
const id= setTimeout(()={
  console.log("Olá");
},5000)

Você pode cancelar a execução usando clearTimeout():
const id = setTimeout(() => {
    console.log("Olá");
}, 5000);

clearTimeout(id);
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
A mudança principal é deixar de pensar em:

"O código executa de cima para baixo e espera cada linha terminar."

e passar a pensar em:

"Algumas tarefas são iniciadas agora, mas terminam depois. Quando terminarem, eu preciso definir o que fazer."

- Veja esse exemplo síncrono:
let resultado = 10 + 20;
console.log(resultado);
- Fluxo mental:
1. Faz a conta
2. Guarda o resultado
3. Exibe o resultado

- Agora com o setTimeout():
let resultado = false;

setTimeout(() => {
    resultado = true;
}, 3000);

console.log(resultado);
- fluxo mental:
1. Agenda o setTimeout
2. Continua imediatamente
3. console.log(resultado)
4. resultado ainda é false
5. Após 3 segundos resultado = true

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
.COMO FUNCIONA O TEMPO NO setTimeout()?
O time do setTimeout() funcina da seguinte forma. "Execute o código após o tempo determidado"
setTimeout(() => {
    console.log("Timeout");
}, 5000);
O código será executado depois dos 5 segundos, não será executado antes e nem durante esse tempo.

.Outro exemplo importante:
console.log("Início");

setTimeout(() => {
    console.log("Timeout");
}, 1000);

// Código pesado
for(let i = 0; i < 10000000000; i++) {}

console.log("Fim");

O setTimeout() está programado para ser executado após 1 segundo, mas ele será executado após o for ser finalizado.

1.Registra a função.
2.Inicia um cronômetro de 3000 ms.
3.Continua executando o restante do código.
4.Quando os 3000 ms acabam, coloca a função em uma fila.
5.O Event Loop verifica se a pilha de execução está vazia.
6.Quando estiver vazia, a função é executada.

A mesma coisa acontece se o tempo ser zero:
setTimeout(() => {
    console.log("A");
}, 0);

console.log("B");

Resuldato:
B
A
Uma forma simples de pensar é:
não é:

"Execute daqui a exatamente 3 segundos."

Significa:

"Espere pelo menos 3 segundos e, quando o JavaScript estiver livre, execute esta função."

.O que é o "retorno" dentro de then() e catch()?
O resolve e reject são funções fornecidas pelo construtor Promise. Já retorno é apenas uma variável/parâmetro que recebe o valor passado para 
essas funções. Portanto, retorno não é o próprio resolve ou reject; ele contém o valor que eles enviaram.

*/
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let resultado=true
// let timeout=3000

// setTimeout(()=>{
//   resultado=true
// },timeout)

// if(resultado){
//   numero.innerHTML="Deu tudo errado"
//   numero.classList.remove("erro")
//   numero.classList.add("ok")
// }else{
//   numero.innerHTML="Deu tudo certo"
//   numero.classList.add("erro")
//   numero.classList.remove("ok")
// }

// numero.innerHTML="Processando..."
// Por que fica "Processando" ao invés de "Deu tudo certo"?