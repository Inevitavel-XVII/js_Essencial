/*
O que é modulo em js?

Um módulo é um arquivo.js com uma responsabilidade específica. O módulo permite melhor organização de código, permitem encapsular o código, dividir e reaproveitar
a lógica do projeto.

.Organização do código:

Imagine que você tem um arquivo chamado script.js:
------------------------------------------------------------------------------------------------------------------------------------------------------------------
function somar(a,b){
   return a+b
}

function subtrair(a,b){
   return a-b
}

const nome = "André";
------------------------------------------------------------------------------------------------------------------------------------------------------------------
Enquanto seu projeto é pequeno, tudo bem. Entretanto, no mundo real os projetos possuem:
- 200 funções.
- 30 classes.
- milhares de linhas de código.

Tudo fica no mesmo arquivo, fica difícil de encontrar as coisas.
Nessa ocasiões os módulos permitem reseolver esse problema

Por exemplo:

projeto/

index.html

matematica.js
usuarios.js
animacoes.js
script.js

Cada arquivo cuida de uma parte do programa:
-matemática.js:

export function somar(a, b) {
    return a + b;
}

export function subtrair(a, b) {
    return a - b;
}

- usuarios.js:

export function criarUsuario(nome) {
    return {
        nome
    };
}

- script.js:

import { somar } from "./matematica.js";

console.log(somar(10,5));

Analisando o código acima você percebe que script usa uma função criada em outro arquivo
------------------------------------------------------------------------------------------------------------------------------------------------------------------
.export:
O export serve para disponibilizar todo o arquivo ou uma parte.

export function falar(){
  console.log("Olá")
}
------------------------------------------------------------------------------------------------------------------------------------------------------------------
.import:
O import serve para utilizar algo que o outro módulo exportou.

import { falar } from "./mensagens.js"
------------------------------------------------------------------------------------------------------------------------------------------------------------------
.Exportando e importando várias coisas:

export const pi = 3.14;

export function soma(a,b){
  return a+b
}

export class Pessoa{

}

###Tudo isso pode ser importado###
import {pi, soma, Pessoa} from "./matematica.js"

------------------------------------------------------------------------------------------------------------------------------------------------------------------
.export default:

export default class Pessoa{

}

ou

export default function soma(){

}

- Agora a importação também muda:

import Pessoa from "./Pessoa.js"

- Você pode até mudar o nome:

import MinhaClasse from "./Pessoa.js"
------------------------------------------------------------------------------------------------------------------------------------------------------------------
.Qual a diferença entre export e export default?
Enquanto pode haver vários export por módulo, o export default pode haver apenas um
- EXEMPLO:
export const nome = "Carlos";
export const idade = 20;
export function falar(){}

import { nome, idade, falar } from "./arquivo.js"; ---> vários dentro dos "{}"



.export default:

export default class Pessoa{

}

import Pessoa from "./arquivo.js";
------------------------------------------------------------------------------------------------------------------------------------------------------------------
.Módulo no HTML

- HTML padrão:
<script src="script.js"></script>
- HTML com módulos:
<script type="module" src="script.js"></script>

O atributo type="module" informa ao navegador que esse arquivo pode usar import e export
------------------------------------------------------------------------------------------------------------------------------------------------------------------
OBSERVAÇÃO: Se você criar uma variável global dentro de um módulo, ela não será global dentro de outro módulo.
###PERGUNTAS###
.Qual a importância de haver apenas um default por módulo?
Um export default é a que representa melhor qual a exportação principal de um módulo. 
EXEMPLO:
- Um banco:

// Banco.js

export default class Banco {

    criarConta(){}

    fecharConta(){}

    listarContas(){}

}

export function validarCPF(){}

export function validarCNPJ(){}

export const taxa = 12;
- Qual a função do arquivo? ----> administrar um banco, as validações existem porque o banco precisa delas.

.Como decidir o que deve ser default?
Você deve pensar da seguinte forma:
"Se alguém for usar esse módulo sem pensar muito, qual elemento ele iria importar?"
Se houver uma resposta, esse é o default.

Por exemplo:
| Arquivo          | Export default | Motivo                                         |
| ---------------- | -------------- | ---------------------------------------------- |
| `Usuario.js`     | `Usuario`      | É a entidade principal do arquivo.             |
| `Produto.js`     | `Produto`      | O restante apenas auxilia a classe.            |
| `Calculadora.js` | `Calculadora`  | É o objeto central do módulo.                  |
| `Button.jsx`     | `Button`       | O componente é o propósito do arquivo.         |
| `Home.jsx`       | `Home`         | O arquivo existe para representar essa página. |
| `Api.js`         | `api`          | É o serviço usado pelo restante da aplicação.  |

.Observação importante:

- Se o arquivo representa uma única entidade importante, usa-se o export default (uma classe, um componente, uma página ou um serviço)
- Se for um conjunto de utilitário, geralmente não é usado default, apenas exportações nomeadas.
Por exemplo:
// matematica.js

export function somar(a, b) {}
export function subtrair(a, b) {}
export function multiplicar(a, b) {}
export function dividir(a, b) {}

Nesse exemplo nenhuma função é mais importante que outra. O módulo existe para reunir utilidades matemáticas, então faz mais sentido reunir export nomeadas do que es-
colher uma função como default. Isso define melhor a especialidade do arquivo para quem vai utilizá-lo. 
*/

// class Cursos{
//     static cursos=["JavaScript", "HTML", "CSS", "Arduíno", "Raspberry", "C++", "Python", "Java", "C#"]
    
//     constructor(){}
    
//     static getTodosCursos=()=>{
//         return this.cursos
//     }
    
//     static getTodosCursos=()=>{
//         return this.cursos[i_curso]
//     }
    
//     static getTodosCursos=()=>{
//         this.cursos.push(novoCurso)
//     }
    
//     static getTodosCursos=()=>{
//         this.cursos=[]
//     }
// }

// export default Cursos