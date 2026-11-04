/*
O que é a biblioteca Math?
Em js math é um objeto embutido da linguagem que possui métodos e propriedades para fazer operações matemáticas. Ele já existe no js, então você não precisa importar
nenhuma biblioteca para usar. Ele é um objeto global. Ele não é uma classe que você não precisa criar uma instância com new. Você usa diretamente.

Por exemplo:
- Math.metodo()
ou
- Math.propriedade

.Arredondamento:
Math.round(4.6)
resultado: 5
- para cima:
Math.ceil(4.1)
resultado:5
- para baixo:
Math.floor(4.9)
resultado: 4


.Valor absoluto(tirar o negativo)
Math.abs(-10)
resultado:10

.Raiz Quadrada
Math.sqrt(25)
resultado:5

.Potência
Math.pow(2,3) - 2³: dois elevado a três
resultado:8

.Número aleatório
Math.random() - retorna um número entre 0 e 1
resultado: 0.7348229

Constantes Matemáticas:

.PI
Math.PI
resultado: 3.141592653589793

.Número de Euler:
resultado: 2.71828...

Exemplo de uso real em um sistema:
-Uma loja que calcula um desconto.

let preco = 49.90
let desconto = 15

let valorFinal = preco - (preco * desconto / 100)

console.log(Math.round(valorFinal))

O Math.round() pode transformar 42.415 em 45 para exibição.

Então, resumindo:

Math = conjunto de ferramentas matemáticas do JavaScript
não precisa instalar
não precisa importar
não usa new Math()

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/