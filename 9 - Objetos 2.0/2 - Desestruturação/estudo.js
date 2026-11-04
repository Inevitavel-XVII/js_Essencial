/*
- Desestruturação:
É um recurso do JavaScript que permite você extrair valores de um array ou propriedades de um objeto de forma simples e organizada. Ela evita que você precise
acessar valores individualmente.

---------------------------------------------------------------------- Desestruturação de arrays: ----------------------------------------------------------------------

.Sem desestruturação:

const numeros = [10, 20, 30];

const a = numeros[0];
const b = numeros[1];
const c = numeros[2];

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

.Com desestruturação:

const numeros = [10,20,30];

const[a,b,c]=numeros;
console.log(a); //10
console.log(b); //20
console.log(c); //30

.A ordem importa:
Nos arrays, a posição determina qual o valor será atribuído.

const frutas = ["Maçã", "Banana", "Uva"];

const [x, y, z] = frutas;

console.log(x); // Maçã
console.log(y); // Banana
console.log(z); // Uva

Se inverter:
const [primeira, terceira] = frutas;
console.log(primeira); // Maçã
console.log(terceira); // Banana

A variável terceira recebeu "Banana" porque ela está na segunda posição da desestruturação. O nome da variável não influência o valor recebido.

.Ignorando Posições
const numeros = [10,20,30,40];

const [a, , c] = numeros;

console.log(a); //10
console.log(c); //30

O segundo elemento foi ignorado.

.Pegando o Restante.
Com o operador spread(...)

const numeros = [10, 20, 30, 40, 50];

const [a, b, ...resto] = numeros;

console.log(a);      // 10
console.log(b);      // 20
console.log(resto);  // [30,40,50]

.Valores Padrão
Caso não exista um valor, você pode definir um padrão.
const numeros = [10];

const [a, b = 100] = numeros;

console.log(a); // 10
console.log(b); // 100

Sem valor padrão:
const [a, b] = numeros;

console.log(b); // undefined

---------------------------------------------------------------------- Desestruturação de Objetos ----------------------------------------------------------------------
Nos objetos, a ordem não importa. O que importa é o nome da propriedade.

const pessoa = {
    nome: "André",
    idade: 30,
    cidade: "Belém"
};

const {nome, idade, cidade} = pessoa;  // os nomes existentes dentro de {} devem ser iguais ao das propriedades do objeto

console.log(nome);
console.log(idade);
console.log(cidade);

É equivalente a:
const nome=pessoa.nome;
const idade=pessoa.idade;
const cidade=pessoa.cidade;

.A ordem não importa:
const pessoa = {
    nome: "André",
    idade: 30,
    cidade: "Belém"
};

const {cidade, nome, idade} = pessoa;

console.log(nome);
console.log(idade);
console.log(cidade);

Resultado:
- André
- 30
- Belém

.Renomeando variáveis.

Você pode usar outro nome.
const pessoa = {
    nome: "André",
    idade: 30
};

const {nome: n, idade: i} = pessoa;

console.log(n); // André
console.log(i); // 30

(nome) é a propriedade do objeto, enquanto (n) é a variável criada

.Valores Padrão em objetos.
const pessoa = {
    nome: "André"
};

const {nome, idade = 18} = pessoa;

console.log(nome);   // André
console.log(idade);  // 18

.Rest em Objetos. ----> você consegue "pegar" todas as propriedades do objeto sem precisar escrever um por um
const pessoa = {
    nome: "André",
    idade: 30,
    cidade: "Belém",
    profissão: "Dev"
};

const {nome, ...dados} = pessoa;

console.log(nome);
console.log(dados);

---> Resultado:
André

{
   idade:30,
   cidade:"Belém",
   profissão:"Dev"
}

---------------------------------------------------------------------- Desestruturação em Funções ----------------------------------------------------------------------
Pelo nome é plausível que você ache que seja um terceiro tipo de desestruturação. Na verdade não existe. A função apenas recebe um valor, pode ser um objeto ou um array,
e a tudo acontece nos parâmetros.

- Sem desestruturação:
function mostrarPessoa(pessoa){
    console.log(pessoa.nome);
    console.log(pessoa.idade);
}

Chamando a função:
mostrarPessoa({
    nome:"André",
    idade:30
});

- Com desestruturação: // muito mais limpo!
function mostrarPessoa({nome, idade}){
    console.log(nome);
    console.log(idade);
}

------------> o javascript faz algo internamente algo parecido com
function mostrarPessoa(obj){

    const nome = obj.nome;
    const idade = obj.idade;

    console.log(nome);
    console.log(idade);
}

- Recebendo array
function mostrarNotas([n1,n2,n3]){
    console.log(n1);
    console.log(n2);
    console.log(n3);
}

mostrarNotas([7,8,9]);

------------> internamente seria como:
const n1 = notas[0];
const n2 = notas[1];
const n3 = notas[2];

Resumo:
| Desestruturação | Base                 | Exemplo                                     | A ordem importa?         |
| --------------- | -------------------- | ------------------------------------------- | ------------------------ |
| Array           | Índice               | `const [a,b] = vetor`                       | ✅ Sim                    |
| Objeto          | Nome da propriedade  | `const {nome} = pessoa`                     | ❌ Não                    |
| Função          | O parâmetro recebido | `function({nome}){}` ou `function([a,b]){}` | Depende do tipo recebido |

Uma observação importante

O que chamamos de "desestruturação em funções" não é um tipo diferente de desestruturação. A função apenas usa a mesma sintaxe de desestruturação nos parâmetros:

- Se o parâmetro é um array, a desestruturação segue as posições.
- Se o parâmetro é um objeto, a desestruturação segue os nomes das propriedades.

Por isso, existem essencialmente dois tipos de desestruturação em JavaScript: de arrays e de objetos. A "desestruturação em funções" é apenas uma aplicação dessas 
duas técnicas ao receber argumentos em uma função.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/