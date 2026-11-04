/*
.O que são objetos literais?
É uma forma simples e direta de criar objetos. Ao invés de usar uma classe ou uma função construtora, você escreve o objeto diretamente em {}
-Sintaxe:
const pessoa = {
    nome: "André",
    idade: 30,
    cidade: "São Paulo"
};

Esse objeto possui 3 propriedades: nome, idade e cidade. Cada propriedade é formada por "chave-valor"

.Como acessar essas proprieades?
- Ponto: console.log(pessoa.nome)
- Colchete: console.log(pessoa["nome"])
OBS: O uso de colchetes quando a chave da propriedade está em uma variável -> apenas nesse caso?
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
.Alterando propriedade:
pessoa.idade=31
console.log(pessoa.idade);

resultado= 31
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
.Adicionando propriedade:
pessoa.profissao = "programador";
console.log(pessoa);

resultado:
{
    nome: "André",
    idade: 31,
    cidade: "São Paulo",
    profissao: "Programador"
}
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
.Removendo propriedade:
delete pessoa.cidade;
resultado:
{
    nome: "André",
    idade: 31,
    profissao: "Programador"
}
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
.Métodos de objetos literais:
const pessoa = {
    nome: "André",

    falar() {
        console.log("Olá!");
    }
};

pessoa.falar();

ou:

const pessoa = {
    nome: "André",

    falar: function() {
        console.log("Olá!");
    }
};

As duas formas são a mesma coisa, mas a primeira é mais moderna e enxuta.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
.O Uso do this:
Dentro de um método o this representa o objeto.
const pessoa = {
    nome: "André",

    apresentar() {
        console.log(`Meu nome é ${this.nome}`);
    }
};

pessoa.apresentar();

resultado:
Meu nome é André
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
.Objetos podem conter outros objetos:
const pessoa = {
    nome: "André",

    endereco: {
        rua: "Rua A",
        numero: 100
    }
};

console.log(pessoa.endereco.rua);
resultado: Rua A
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
.Objetos podem conter outros arrays:
const pessoa = {
    nome: "André",

    hobbies: [
        "Ler",
        "Programar",
        "Academia"
    ]
};

console.log(pessoa.hobbies[1]);
resultado: Programar
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
.Quando usar objetos literais?
Quando você precisa representar uma entidade ou um grupo de dados. Se for criar diversos objetos parecidos com a mesma estrutura, é importante usar classes ou 
- Funções construtoras.
Exemplo de objetos literais:
const produto = {
    nome: "Notebook",
    preco: 3500
};

const aluno = {
    nome: "Carlos",
    nota: 9.5
};

const configuracao = {
    tema: "escuro",
    idioma: "pt-BR"
};

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Classes:
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const p1 = new Pessoa("André", 30);
const p2 = new Pessoa("Carlos", 25);
const p3 = new Pessoa("Ana", 22);

O que é const obj = new Object();
É uma função construtora do nativa do javascript. Serve para criar um objeto vazio em js.

EXEMPLO:
const obj = new Object();
obj.nome = "Carlos";
obj.cargo = "Desenvolvedor Júnior";

Tanto const obj = new Object(); quanto const obj = {} podem ser usados da mesma maneira. A diferença de um pro outro é sua sintaxe, a segunda opção é a mais moderna
e enxuta de se usar. Na prática, ambos os objetos herdam as mesmas funções nativas do "Grande Objeto Pai" da linguagem (chamado Object.prototype).
*/