let nome=new String("Bruno Pinho Campos 1978")
let email="bruno@bruno.com.br"
let numeros="1, 10, 100, 1000"
/*
console.log(nome.startWidth("B")) // verifica se a string de dentro é a string que inicia, retornar true ou false
console.log(nome.endsWidth("s")) // verifica se a string de dentro é a string que termina, retornar true ou false
console.log(nome.includes("teste")) // retorna um boleano, verifica se a string faz parte da string que está sendo pesquisada
console.log(nome.repeat(4)) // você decide quantas vezes a string repete
// repeat não substitui a string original, isso se aplica ao método de transformar tudo em maiúsculo ou minúsculo. Se você quiser alterar a string original através
// desses métodos, você precisa atribuir os métodos à string original. Por exemplo:
// nome=nome.repeat(4) --> você atribuio o método de string à variável
console.log(nome.charCodeAt(0)) // ---> retorna o código de uma string de acordo com sua posição
console.log(nome.charCodeAt(1)) // ---> retorna o código de uma string de acordo com sua posição
console.log(nome.charCodeAt(2)) // ---> retorna o código de uma string de acordo com sua posição
console.log(nome.charCodeAt(3)) // ---> retorna o código de uma string de acordo com sua posição
console.log(nome.charCodeAt(4)) // ---> retorna o código de uma string de acordo com sua posição

console.log(String.fromCodePoint(66,114,117,110,111)) // ---> retorna o caractere de acordo com o código dele
*/
console.log(nome)
console.log(nome.search(/pinho/i))
console.log(nome.match(/O/ig))
console.log(nome.replace(/o/ig,"Teste"))
console.log(nome.match(/[a-g|h-z|0-9]/ig))

//Metacaracteres
console.log(nome.match(/\d/ig)) //números
console.log(nome.match(/\s/ig)) //Espaços
console.log(nome.match(/\bP/ig)) // 

//Quantificadores
console.log(numeros)
console.log(nome.match(/o+|s+/ig))
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))



