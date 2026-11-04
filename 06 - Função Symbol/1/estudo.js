/*
.o que é Symbol()?

Um Symbol() é um dado primitivo de valor único, você não consegue criar um Symbol idêntico ao outro. Você pode escrever:
const simbolo1 = Symbol('id');
const simbolo2 = Symbol('id');

console.log(simbolo1 === simbolo2); // false

.Para que serve?
O uso mais comum é como chaves de propriedades de objetos

Em javascript o uso mais comum para chaves de objetos é o uso de string. Se você estiver escrevendo uma biliotea ou traalhando em um projeto grande, pode 
acabar sobrescrevendo uma propriedade sem querer. Com Symbols() isso é impossível.
EXEMPLO:

const usuario = {
  nome: "Alice",
  idade: 25
};

// Criamos o Symbol
const idInterno = Symbol('id');

// Usamos o Symbol como chave (repare no uso de colchetes [])
usuario[idInterno] = 98765;

console.log(usuario[idInterno]); // 98765

.Eles são ocultos
As propriedades de objetos que usam um symbol() como chave não são visíveis em loops comuns como "for in" e "Object.keys()"

// Usando o objeto do exemplo anterior:
console.log(Object.keys(usuario)); // ['nome', 'idade'] (o idInterno sumiu daqui!)

for (let chave in usuario) {
  console.log(chave); // Imprime apenas "nome" e "idade"
}

.Well-Known Symbols
O javascript usa alguns symbols imbutidos para definir comportamentos especiais da linguagem, por exemplo Symbol.iterator
Por exemplo, se você quer que um objeto personalizado possa pecorrer um loop for of(como se fosse um array), você pode definir o método dele usando um Symbol 
Global da linguagem.

Resumo: Use Symbol() com um identificador único que nunca vai bater de frente com nenhuma outra string ou chave no seu código, garantindo mais segurança e
consistência na manipulação do seu código.
*/