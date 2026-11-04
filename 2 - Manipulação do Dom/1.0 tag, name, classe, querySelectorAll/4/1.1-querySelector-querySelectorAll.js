const divTodas=[...document.getElementsByTagName("div")]
const cursosTodos=[...document.getElementsByClassName("curso")]
const cursosC1=[...document.getElementsByClassName("c1")]
const cursosC2=[...document.getElementsByClassName("c2")]
const cursosEspecial=document.getElementById("c1") // é o único que não leva o "s" no Element, devido o 'id' ser único

const query_divTodas1=[...document.querySelectorAll("div")] // aqui ele está manipulando as div do objeto DOM - no caso, seria o uso da "tag"
const query_divTodas2=[...document.querySelectorAll("div [class]")] 
// somente as div que possuem o elemento class, por isso que os 2 últimos elementos não alteram,
// devido terem apenas o elemento id
const query_divTodas3=[...document.querySelectorAll("div > p")] // você consegue manipular todos os elementos 'p' dentro das div
const query_cursosTodos=[...document.querySelectorAll(".curso")] 
// o ponto no curso seleciona todos os elementos que têm a classe curso
// é o mesmo seletor que você usa no arquivo css
const query_cursosC1=[...document.querySelectorAll(".c1")] // manipulando classe 'c1' - usa o ponto para manipular a classe
const query_cursosc2=[...document.querySelectorAll(".c2")] // manipulando classe 'c2' - usa o ponto para manipular a classe
const query_cursosc3=document.querySelectorAll("#c1")[0] // manipulando o 'id' - usa '#' para manipular o id

console.log(query_divTodas3)

// console.log(divTodas)
// console.log(cursosTodos)
// console.log(cursosC1)
// console.log(cursosC2)
// console.log(cursosEspecial)
 
// cursosC2.map((el)=>{
//   el.classList.add("destaque") // você adicionou a classe destaque nos elementos que possuem a classe "c2"
//   // que está sendo manipulado por const ' cursosC2=[...document.getElementsByClassName("c2")] '
//   //ou seja, o elemento !important se sobrepõem a outros elementos que possuem o mesmo valor.
// })

/*

**QUAL A DIFERENÇA ENTRE QUERYSELECTOR E QUERYSELECTORALL?**

.querySelector() retorna apenas o primeiro elemento(um único objeto ELEMENT) que corresponde ao seletor css específicado.
Se nenhum elemento for encontrado, ele retorna null

.querySelectorAll() retorna uma lista estática (uma nodeList - igual ao htmlCOLLECTION) de todos os elementos que correspodem
ao seletor especificado. Se nennhum elemento for encontrado, ele retorna uma lista vazia.

Ambos os métodos utilizam seletores CSS para encontrar elementos no DOM, oferecendo flexibilidade na seleção de elementos
por ID, classe, tipo de tag ou atributos. 

**QUAL A DIFERENÇA ENTRE QUERYSELECTOR PARA OS OUTROS TIPOS?**

Enquanto querySelectoAll() retorna um nodelist, o outros tipos retornam HTMLCollection ou um único elemento, caso do ID.

-FLEXIBILIDADE:
.O queryselector possui alta flexibilidade, aceita qualquer **seletor css - válido**, enquanto os outros métodos trabalham
com apenas um tipo.

-SINTAXE:
.A sintaxe do querySelector necessita de prefixos css, por exemplo: .classe, #id, div - enquanto os outros métodos necessitam
apenas do nome da classe, id ou o tipo de tag de acordo com getElementBy específico.

-RETORNO:
.O retorno do querySelectorAll() é um node list, enquanto que os getElementBy retornam HTMLCollection. O retorno deles podem
ser modificados usando um spread '...' para um array e ter mais métodos disponíveis.

- DINAMISMO:
.O querySelectoAll() não possui dinamismo por ser estática - não reflete automaticamente mudanças no DOM após a sele
ção inicial, enquanto os métodos getElement(tag, div, class e name) podem modifica automaticamente se os elementos corres
pondentes forem adicionados ou removidos do DOM - o método 'id' só pode ser acessado uma vez.

- PERFOMANCE:
.A perfomace do querySelector é lenta devido a complexidade do motor de seletores do CSS, enquanto nas outras iss não ocorre.
Com o uso do 'id' é superior em velocidade, pois acessa diretamente o elemento.

*/

// reveja a video aula a partir do minuto 12
