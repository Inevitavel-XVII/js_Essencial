/*
Manipular strings em JavaScript é uma das habilidades mais fundamentais que você vai usar no dia a dia. Como quase tudo na web envolve textos (dados de fomulários, 
URLs, respostas de APIs) saber tratar esses textos é o que separa um código que funciona de um código que quebra com qualquer entrada inesperada.

Para um desenvolvedor júnior saber manipular strings é crucial porque maior parte das suas tarefas serão validação de dados, formatação de textos para exibição e
limpeza de informações que vêm do usuário.

.Funções mais usadas no dia a dia e em projetos.

1.Limpeza e formatação básica
.trim(): Remove espaçõs em branco no início e no final de uma string.
Caso mais comum: O usuário digitou "  email@teste.com  " no formulário por acidente. Se você não usar o trim(), o banco de dados vai rejeitar o email ou o login
vai falhar
.toLoweCase() e toUpperCase(): Transforma o texto todo em minúsculo ou maiúsulo.
Caso real: Comparar e-mails ou buscar termos de forma que "João" e "joão" sejam tratados iguais

2.Busca e validação
.includes(): Verifica se uma string contém outra, retornando true ou false.
Caso real: Criar uma barra de busca simples que filtra uma lista de produtos pelo nome.
.startsWidth() e endsWidth(): Verifica se o texto começa ou termina com determinado caractere.
Caso real: Validar se um link começa com "https//" ou se um arquivo termina com .pdf.

3.Modificação e Extração
.replace() e replaceAll():Substitui um pedaço do texto pelo outro.
Caso real:Formatar um CPF tirando os pontos e traços: cpf.replaceAll('.', '').replace('-','')
.slice(inicio, fim):Mostra apenas um "spolier" de um post de blog(ex: os primeiros 100 caracteres) e colocar um "..." no final.

4.Conversão e Divisão
.split(): Divide um string e transforma em array de strings, com base em um separador.
Caso real: Você recebe uma string de tags "javascript, react, node" e precisa transformar em um array ['javascript', 'react', 'node'] para salvar no banco.

.Por que isso é importante?
Imagine que você recebeu o chamado para corrigir um bug simples no sistema da empresa: o relatório de usuários cadastrados está saindo com nomes quebrados ou dupli
cados.
Sem as funções de string, você teria que criar loops complexos(for) para checar caractere por caractere. Com elas, você resolve o problema combinando poucas linhas
de código, deixando o sistema muito mais seguro contra erros de digitação humana

.Método slice(parâmetroX, parâmetroZ).
Ele é usado para copiar uma parte da string e do array sem modificar o original.

Sintaxe:
- array.slice(inicio, fim)
- string.slice(inicio, fim)

.inicio----> índice onde começa a cópia.
.fim----->índice onde termina a cópia, ele não é incluido

Exemplo:
const numeros = [10,20,30,40,50];

const novo = numeros.slice(1,4);

console.log(novo);

Resultado: [20,30,40]

.Por que?
Índice:    0   1   2   3   4
Valor :   10  20  30  40  50
             ↑-----------↑
          começa      termina antes

.Se haver apenas um parâmetro dentro do slice, ele funciona diferente:
const numeros = [10,20,30,40,50];

console.log(numeros.slice(2));
###RESULTADO: [30,40,50]
######Comece do índice 2 e vá até o final###########

.Se houver nenhum parâmetro, ele copia tudo:
const numeros = [10,20,30];

const copia = numeros.slice();

console.log(copia);
###RESULTADO:[10,20,30]

.Índices Negativos.
Quando o índice é negativo, a contagem é a partir do final

const numeros = [10,20,30,40,50];

console.log(numeros.slice(-2));
####RESULTADO: [40,50]
Por que?
10 20 30 40 50
         ↑  ↑
        -2 -1

console.log(numeros.slice(-4,-1));
###RESULTADO: [20,30,40,50]
Visualmente:
10 20 30 40 50
   ↑-------↑
  -4      -1
O ínice final nunca entra.

.Quando um desenvolvedor usa um slice()?
Em projetos reais, é comum usar slice() para:
- copiar arrays sem alterar o original;
- obter uma parte de uma lista(paginação, produtos, comentários, mensagens);
- extrair trechos de strings(prefixo, sufixos, extensões de arquivos, partes de códigos);
- pegar os últimos N elementos de um array usando o negativo array.slice(-N);

.Método match()
O match() serve para procurar padrões dentro de um string. Esses padrões geralmente são definidos por uma expressão regular(RegExp)
Sintaxe:
- string.match(expresão)
Exemplo Simples:
let texto = "Hoje está fanzendo sol";
console.log(texto.match("sol"));

resultado:
["sol", index:19, input:"Hoje está fazendo sol"]
Ele retorna um array contendo:

- o texto encontrado --------> sol
- a posição onde encontrou -------> index:19
- a string pesquisada ------> Hoje está fazendo sol

Se macth() não encontar a palavra, o resultado é null.

.Procurando números.

let texto="Pedido 4589";
console.log(texto.match(/\d+/));

resultado:["4589"]

- EXPLICANDO AS EXPRESSÕES:
-----> \d -----> qualquer digito
-----> +  -----> um ou mais

Então: \d+ significa "uma sequência de números"

.Procurando Letras.

let texto="abc123";
console.log(texto.match(/[a-z]+/));

resultao: abc

.Encontrando todas as ocorrências:

let texto = "banana";

console.log(texto.match(/a/));

resultado: ["a"]

- Apenas a primeira é retornada

(Usando g)
console.log(texto.match(/a/g));

resultado:["a","a","a"]

Agora ele retorna todas

Casos reais:
1 - Encontrar números em uma frase:
let texto = "Tenho 3 gatos e 2 cachorros";

console.log(texto.match(/\d+/g)); -----> encontre todo os digitos

resultado: ["3","2"]

2 - Extrair hastags:

let post = "Hoje estudei #JavaScript #HTML";

console.log(post.match(/#\w+/g));

resultado: ["#JavaScript","#HTML"]

3 - Extrair emails(forma simplificada)
let texto = "Contato: joao@email.com";

console.log(texto.match(/\S+@\S+\.\S+/));

resultado:["joao@email.com"]

Caracteres usados em RegEx.
--------------------------- 1. Caracteres literais (Java,@,#) ---------------------------
São os mais simples e significa "Procure exatamente a palavra Java", funciona como o includes.
Exemplo:
let texto = "JavaScript";

console.log(texto.match(/Java/)); ----> resultado: ["Java"]

--------------------------- 2.O ponto(.): ---------------------------
/.
significa qualquer caractere
Exemplo:
let texto = "ABC";

console.log(texto.match(/A.C/));
resultado: ["ABC"]

Também funcionaria para A1c ou A-C, porque o ponto aceita qualquer caractere.

--------------------------- 3.Classes(\d,\w,\s) ---------------------------

- (\d) Significa qualquer número
É a mesma coisa que escrever: [0-9]
Por exemplo:

let texto="Pedido 459";

console.log(texto.match(/\d/g));
resultado: ["4","5","9"]

- (\D) Maiúsculo significa ao contrário. Qualquer coisa que não seja número.

- (\w) significa letras, números e anderline(_)
É a mesma coisa que escrever: [A-Za-z0-9_]

- (\W) significa o contrário de \w.

- (\s) significa espaço em branco.
Inclui espaço, tab e quebra de linha.

- (\S) siginifica qualquer coisa que não seja espaço

--------------------------- 4.Intervalos ---------------------------

[a-z] ---> todas as letras mínusculas.
[A-Z] ---> todas as letras maiúsculas.
[0-9] ---> todos os números
Você pode misturar elas: [a-zA-Z]

--------------------------- 5.Negação([^]) ---------------------------
Dentro dos colchetes: [^0-9]
Significa qualquer coisa que não seja número

--------------------------- 6.Quantificadores(+,*,?,{}) ---------------------------

+ = significa um ou mais 
\d+ = um ou mais números
Exemplo: 12345 é econtrado

* = significa 0
\d* = significa zero ou mais números

? = significa zero ou um
Acho que esse quantificador funciona como um boleano

{3} = significa retorne três números, a quantidade de números retornada é definido dentro do colchetes
\d{3} = exatamente 3 números

{3,} = significa retorne três ou mais números
\d{3,} = três ou mais números

--------------------------- 7.Âncoras(^,$) ---------------------------

^ = Fora dos colchetes significa "começa com determinada coisa"
/^Java/ = Retorna qualquer coisa que começa com Java

$ = Termina com determinada coisa
/Script/ = Retorna qualquer coisa que termina com Sript

--------------------------- 8.Grupos(()), Alternativas(|) e flags (g,i) ---------------------------

- Parênteses:
/(ab)+/ = significa encontre o grupo(padrão) ab repetido

- Flags: Depois da Barra Final
g --> procura todas as ocorrências
/abc/g ---> retorna todos abc, mesmo que se repitam

i --> ignora maiúsculas e minúsculas
/abc/i --> Se você usar isso, até mesmo letras maiúsculas podem ser retornados
/abc/i --> ABC

m --> modo multilinha
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
| Símbolo  | Significado                     |    |
| -------- | ------------------------------- | -- |
| `.`      | Qualquer caractere              |    |
| `\d`     | Número                          |    |
| `\D`     | Não número                      |    |
| `\w`     | Letra, número ou `_`            |    |
| `\W`     | Não letra/número/_              |    |
| `\s`     | Espaço                          |    |
| `\S`     | Não espaço                      |    |
| `[abc]`  | Um dos caracteres listados      |    |
| `[a-z]`  | Intervalo de letras             |    |
| `[^abc]` | Exceto os caracteres listados   |    |
| `+`      | Um ou mais                      |    |
| `*`      | Zero ou mais                    |    |
| `?`      | Zero ou um                      |    |
| `{n}`    | Exatamente `n` vezes            |    |
| `{n,m}`  | Entre `n` e `m` vezes           |    |
| `^`      | Início da string (fora de `[]`) |    |
| `$`      | Fim da string                   |    |
| `        | `                               | OU |
| `()`     | Agrupamento                     |    |
| `g`      | Todas as ocorrências            |    |
| `i`      | Ignora maiúsculas/minúsculas    |    |

1. Caracteres literais (Java,@,#)
2.Classes(\d,\w,\s)
3.Intervalos([a-z], [0-9])
4.Quantificadores(+,*,?,{})
5.Âncoras(^,$)
6.Grupos(()), Alternativas(|) e flags (g,i)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
let nome=new String("Bruno Pinho Campos")
let nome2=new String("Bruno Pinho Campos")
let nome3=new String(nome2.toLocaleUpperCase())
let canal=new String("CFB Cursos")

console.log(nome)
console.log(nome.charAt(0)) // retorna o valor através da posição
console.log(nome.charAt(1)) // retorna o valor através da posição
console.log(nome.charCodeAt(0)) // retorna o código do valor dessa posição
console.log(nome.concat(canal)) // concatena strings
console.log(nome.indexOf("o")) // retorna a posição através do valor, mas o primeiro. não retorna a posição de todos os valores escritos dentro do parêntese
// Por exemplo: Rodolfo --> indexOf("o") ----> retorna o primeiro "o" que tem a posição 1
console.log(nome.lastIndexOf("o")) // funiona idêntico ao de cima, mas retorna o último

console.log(nome.localeCompare(nome2))

/*
Se você esrever:
let n1="Bruno"
let n2="Bruno"

console.log(n1==n2) ----> resultado: true

(Você está comparando variáveis.)

Se você escrever:
let nome=new String("Bruno Pinho Campos")
let nome2=new String("Bruno Pinho Campos")

console.log(nome==nome2) ----> resultado: false

(você está comparando objetos strings)

Para que você possa comparar dois objetos strings, é necessário usar localeCompare() -->
- console.log(nome.localeCompare(nome2))
Se o resulto for:
.0 -------> iguais
.1 -------> a primeira(nome) string é maior que a segunda(nome2)
.-1 ------> a primeira(nome) string é menor que a segunda(nome2)
*/

console.log(nome.replace("B","P")) // replace serve para substituir strings.
/*
nome= "Bruno Pinho Campos"
console.log(nome.replace("B","P")) ----> Pruno Pinho Campos
*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(nome.search("Pinho"))
/*
search() retorna a posição de Pinho, mas apenas do primeiro
console.log(nome.search("Pinho")) -----> retorna a posição de "P"(6)
*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(nome.slice(6,11)) // recorta parte do texto usando a posição do começo e fim da string

let sobrenome=nome.slice(6,11)
console.log(sobrenome) // Pinho
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
let arr_nome=nome.split(" ")
console.log(arr_nome)
/*
split também recortar o array igual ao slipt, mas retorna um array.
Por exemplo: 
let nome=André Pereira da Costa
console.log(nome.split(" ") ----> resultado: ["André", "Pereira", "da", "Costa"]

(O valor dentro de split é onde a string será cortada e transformada em array)

let nome=new String("Bruno Pinho Campos")
let arr_nome=nome.split("n")
console.log(arr_nome) ------> ['Bru', 'o Pi', 'ho Campos'] 
*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
let parte1=nome.substring(6,11) // funciona igual o slice, mas os número negativos funcionam de forma menos intuitiva
console.log(parte1)
/*

*/

let parte2=nome.substr(6,5)
console.log(parte2)
// tem uma ideia parecida com o slice, mas é um pouco diferente
//substr(início, quantidade) 
// ínico ----> posição onde começa a extração
// quantidade -------> quantidade de caractere que o substr() pega
/*
let nome = "André";

console.log(nome.substr(1,3));

resultado: ---->  ndr

índices:
A n d r é
0 1 2 3 4

Começou no índice 1 e pegou 3 caractere.
*/
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// nome=nome.toUpperCase()
console.log(nome.toUpperCase())
console.log(nome)
console.log(nome.toLocaleUpperCase)
console.log(nome)

console.log(nome3)
console.log(nome3.toLowerCase())
console.log(nome3.toLocaleLowerCase())

console.log(nome.valueOf())

let num=10
console.log(typeof(num.toString()))


