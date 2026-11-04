const div_data=document.getElementById("div_data") // espaço da data
const div_relogio=document.getElementById("div_relogio") // espaço do relógio
const btn_ativar=document.querySelector("#btn_ativar") // botão ativar
const btn_parar=document.querySelector("#btn_parar") // botão parar
const tmp_alarme=document.querySelector("#tmp_alarme") // input
const hora_alarme=document.querySelector("#hora_alarme") // hora do alarme
const timer=document.querySelector("#timer") // todo as div estão dentro dessa div, vai ser acessado para mudar a cor de fundo

const som_alarme=new Audio("alarme.mp3") 
som_alarme.loop=-1 // Define que o som vai tocar repetidamente (em loop)

// Iniciar com null é como deixar uma caixa etiquetada e guardada, mas completamente vazia, até o momento em que o usuário decidir colocar um dado 
// válido dentro dela. É uma prática excelente de organização!
let ts_atual=null 
let ts_alarme=null 
let alarme_ativado=false // valor boleano on/off, passa ter valor off
let alarme_tocando=false // valor boleano on/off, passa ter valor off


btn_ativar.addEventListener("click",()=>{
  ts_atual=Date.now() // obtém o timestamp de agora. ele transforma ts_atual em um timestamp
  ts_alarme=ts_atual+(tmp_alarme.value*1000) // o valor que for colocado dentro do input será multiplicado por 1000, transformando o valor em segundo 
  alarme_ativado=true // valor boleano on/off, passa ter valor true
  const dt_alarme=new Date(ts_alarme) // o timestamp dentro do new Date() vira uma data, dessa forma você consegue usar os métodos da classe Date
  hora_alarme.innerHTML="Hora Alarme:"+dt_alarme.getHours()+":"+dt_alarme.getMinutes()+":"+dt_alarme.getSeconds()// ela serve para imprimir na tela um texto
})

btn_parar.addEventListener("click",()=>{
  alarme_ativado=false // boleano on/off, passa a ter o valor off
  alarme_tocando=false // boleano on/off, passa a ter o valor off
  hora_alarme.innerHTML="Hora do Alarme:" // o valor antigo some
  tmp_alarme.value=0 // o input fica zerado
  timer.classList.remove("alarme") // remove a classe que deixa o quadrado vermelho
  som_alarme.pause() // pausa o som
  som_alarme.currentTime=0 // faz o som voltar para a estaca zero
})


// acessando a data 
const data=new Date()

let dia=data.getDate()  // acessa o dia
dia=dia<10?"0"+dia:dia // se o valor for menor que 10, haverá um zero na frente
let mes=data.getMonth() // acessa o mês
mes=mes<10?"0"+mes:mes // se o valor for menor que 10, haverá um zero na frente
const data_r=dia+"/"+mes+"/"+data.getFullYear() // concatena os valores e forma uma frase usando string e variaveis
div_data.innerHTML=data_r // imprime data_r 
// criando um relógio
const relogio=()=>{
  const data=new Date() // acessa a data do computador
  let hora=data.getHours() // acessa as horas
  hora=hora<10?"0"+hora:hora // se o valor for menor que 10, haverá um zero na frente
  let minuto=data.getMinutes() // acessa os minutos
  minuto=minuto<10?"0"+minuto:minuto // se o valor for menor que 10, haverá um zero na frente
  let segundo=data.getSeconds() // acessa os segundos
  segundo=segundo<10?"0"+segundo:segundo // se o valor for menor que 10, haverá um zero na frente
  const hora_completa=hora+":"+minuto+":"+segundo // concatena os valores e forma uma frase usando string e variaveis
  div_relogio.innerHTML=hora_completa // imprime hora_completa
  // código que muda 
  if(alarme_ativado && !alarme_tocando){ // se alarme estiver ativado(true) e não estiver tocando(false), execute o código
    if(data.getTime() >= ts_alarme){ // se a data for igual ou maior que o timestamp(convertido em segundos na linha 20) definido no input, execute o código
      alarme_tocando=true // boleano on/off passa a ser on
      som_alarme.play() // inicia o áudio
      timer.classList.add("alarme") // adiciona a classe alarme, essa classe deixa o fundo vermelho
    }
  }
}

const intervalo=setInterval(relogio,1000) // executa a função relógio. a cada segundo atualiza a hora

/*
Qual a diferença de uma classe para um objeto construtor?
Ambas possuem o mesmo objetivo: criar objetos a partir de um modelo.

- FUNÇÃO CONSTRUTORA
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.apresentar = function() {
    console.log(`Olá, meu nome é ${this.nome}`)
}

const p1 = new Pessoa("André", 30)

- CLASSE
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("André", 30)

O resultado é praticamente o mesmo, funcionam praticamente da mesma forma. Entretanto, classe é uma forma mais moderna de trabalhar com objetos criados a partir de
um modelo. O código fica mais organizado e prototype funciona por baixo dos panos.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

O que é Date() em js?

É uma classe nativa(built-in) do javascript usada para trabalhar com tempo.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
OBSERVAÇÃO:
Em JavaScript, built-in refere-se a objetos, funções e métodos que já vêm nativos na linguagem. Eles estão disponíveis globalmente, sem a necessidade de instalar 
bibliotecas ou escrever códigos adicionais, permitindo realizar tarefas comuns de forma rápida e eficiente
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Quando você escreve:
const data= new Date()
você está criando um objeto Date que contém a data e hora atuais do sistema.
Se você digita em seguida:
console.log(data)
Você obtém:
2026-06-16T20:30:45.123Z
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Date é uma classe ou função construtora?

Historicamente, Date é uma função construtora nativa do JavaScript.

Você a utiliza com new, exatamente como uma classe:
const data = new Date()
Por isso, muitos desenvolvedores modernos dizem simplesmente que "Date é uma classe", embora tecnicamente ela tenha sido implementada como uma função construtora 
nativa.
Você pode verificar:

console.log(typeof Date)

Resultado:

function

Isso acontece porque, internamente, as classes em JavaScript também são um tipo especial de função.

O que o new faz aqui?

Quando você escreve:
const data = new Date()
o JavaScript:

1-cria um objeto vazio;
2-liga esse objeto ao Date.prototype;
3-executa a função construtora Date;
4-retorna o objeto criado.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
MÉTODOS DA CLASSE DATE():
Os métodos são divididos entre:
-get(obter informação)     |  getUTCDate() - iguais ao get, mas usando UTC em vez do horário local(PARA USAR O UTC, APENAS ESCREVA IGUAL - MAS COM O UTC NO MEIO)
Método:	                      Retorna:
getDate()	                    Dia do mês (1-31)
getDay()	                    Dia da semana (0-6)
getMonth()	                  Mês (0-11)
getFullYear()	                Ano completo
getHours()	                  Hora
getMinutes()	                Minutos
getSeconds()	                Segundos
getMilliseconds()	            Milissegundos
getTime()	                    Timestamp em ms
getTimezoneOffset()	          Diferença do fuso horário em minutos

-set(para alterar valores)    |  setUTCDate() - iguais ao set, mas usando UTC em vez do horário local
Método:
setDate()
setMonth()
setFullYear()
setHours()
setMinutes()
setSeconds()
setMilliseconds()
setTime()


MÉTODOS DE CONVERSÃO PARA STRING:
Método	                  Formato
toString()	                Completo
toDateString()	            Apenas data
toTimeString()	            Apenas hora
toUTCString()	              UTC
toISOString()	              ISO 8601
toJSON()	                  JSON
toLocaleDateString()	      Data local
toLocaleTimeString()	      Hora local
toLocaleString()	          Data e hora local

Os métodos de conversão para string são usados para retornar os dados em formato de texto, permitindo maior compreensão para os usuários
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
qual a diferença entre toUTCString(), toISOString() e toJSON()? O primeiro retorna uma string no formato UTC, o segundo retorna uma string no formato ISO 8601 usado
em api e o JSON converte propriedades de um objeto em uma string?

toUTCString(): converte uma string textual usando o horário UTC. Ideal para leitura humana em UTC.
EXEMPLO: const data = new Date() ----> console.log(data.toUTCString()) -------> resultado: Tue, 16 Jun 2026 21:30:45 GMT

toISOString(): converte uma string textual usando o horário UTC, mas está escrita no padrão ISO 8601 - esse formato é usado em API, banco de dados e sistemas distribuídos
EXEMPLO: const data = new Date() ----> console.log(data.toISOString()) -------> resultado: 2026-06-16T21:30:45.123Z

toJSON(): Quando aplicado a um objeto Date, ele retorna praticamente o mesmo valor de toISOString().
EXEMPLO: const data = new Date() ----> console.log(data.toJSON()) -------> resultado: 2026-06-16T21:30:45.123Z
Um detalhe interessante

Internamente, o método toJSON() de Date chama toISOString().

É como se fosse algo parecido com:

Date.prototype.toJSON = function() {
  return this.toISOString()
}

(A implementação real é um pouco mais complexa, mas a ideia é essa.)

Por isso os resultados são iguais.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
MÉTODOS ESTÁTICOS DA CLASSE Date
São chamados diretamente em Date, sem criar objetos.

-Date.now()
Retorna o timestamp atual.
console.log(Date.now())

-Date.parse()
converte uma data em timestamp
console.log(Date.parse("2026-06-16"))

-Date.UTC()
Cria um timestamp UTC.
console.log(Date.UTC(2026, 5, 16))
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Qual a diferença de um timestamp para um timestampUTC?

Exemplo Prático:
Se duas pessoas (uma em Londres - UTC+0 e outra em São Paulo - UTC-3) clicarem no botão do seu alarme exatamente no mesmo milésimo de segundo, o código delas vai 
gerar o mesmo número para o Date.now(). O valor bruto (Timestamp) é idêntico. Porém, a interpretação muda na hora de exibir:

JavaScript

const ts = Date.now(); // Ex: 1784426271000 (O timestamp puro)

const data = new Date(ts);

// Em Londres (UTC+0), vai imprimir:
console.log(data.getHours()); // Vai mostrar: 04 (Exemplo)

// Em São Paulo (UTC-3), vai imprimir:
console.log(data.getHours()); // Vai mostrar: 01 (3 horas a menos)


RESUMO DE DIFERENÇAS:
Conceito                    O que ele representa?                               Tem fuso horário?                 Exemplo
timestamp puro              Milissegundos desde 1970                            Não. É universal.                 1784426271000
timestamp UTC               Tempo de referência global absoluto                 Sim, fixado em UTC+0              2026-06-18T04:00:00Z
timestamp Local             Tempo ajustado para a região do usuário             Sim, varia por cidade/país        18/06/2026 01:00:00

Por isso, a regra de ouro na programação é: salve sempre o dado no banco de dados como Timestamp Puro ou UTC, e só converta para o horário local na tela do 
dispositivo do seu usuário!

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
MÉTODOS ESPECIAL: valueOf() - método herdado do mecanismo de conversão de objetos do JavaScript.

Retorna o timestamp da data.
const data = new Date()
console.log(data.valueOf())
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
É praticamente equivalente a:
console.log(data.getTime())
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
Os métodos mais usados no dia a dia:
-getDate()
-getMonth()
-getFullYear()
-getHours()
-getMinutes()
-getSeconds()
-getTime()

-setDate()
-setMonth()
-setFullYear()

-toLocaleDateString()
-toLocaleTimeString()
-toLocaleString()

-Date.now()
###Espaço das dúvidas sobre o tema###

.1-O que é timestamp?
É o número que representa a quantidade de milissegundos desde a década de 1970
01/01/1970 00:00:00 UTC
Essa data é chamadada de Unix Epoch

Exemplo:
console.log(Date.now())
Saída:
1781635000000
Significa:
"Já se passaram 1.781.635.000.000 milissegundos desde 1º de janeiro de 1970."

.Por que usar timestamp?
Porque números são mais fáceis de comparar do que datas.

const inicio = Date.now()

// código qualquer

const fim = Date.now()

console.log(fim - inicio)

resultado: 250

Significa que o código levou 250ms para ser executado.

Também é muito usado para:

-cronômetros
-alarmes
-medir desempenho
-verificar expiração de tokens
-ordenar datas

.2-O que são métodos estáticos e qual a sua importância?

Métodos estáticos pertencem a classe e não aos objetos criados(como se fosse static que você cria em uma classe)

Date.now()
Aqui você está chamando um método diretamente na classe.

const data = new Date()
data.getFullYear()
Aqui você está chamando um método do objeto

.Analogia

Imagine uma classe Calculadora.

class Calculadora {
  static somar(a, b) {
    return a + b
  }
}

Você pode usar:

Calculadora.somar(5, 3)

sem criar:

const calc = new Calculadora()

3.O que é UTC?

UTC é o horário mundial. Usado em banco de dados, api e em sitemas globais(google calendar, outlook, sistemas bancários, reservas de hóteis, companhia aéreas)

.Por que UTC existe?

Ele é importante para manter um padrão de hora mundial. Se você tiver usuários de vários países usando o mesmo site, você pode criar um sistema que apareça
a hora atual do páis que o usuário vive - convertendo o horário mundial no horário da região da pessoa.
###essa minha lógica sobre UTC está correta?###


4. O que é toISOString()?

toISOString() é um método do objeto Date que converte uma data para uma string no padrão ISO 8601, que é um formato internacional muito usado em APIs, 
bancos de dados e sistemas distribuídos.

.Por que esse formato é tão usado?
-Padronizado mundialmente.
-Fácil de armazenar.
-Fácil de comparar.
-Independente do idioma do usuário.

- json
{
  "criadoEm": "2026-06-16T21:30:45.123Z"
}

Qualquer sistema em qualquer país é capaz de entender esse json

Exemplo prático:

const usuario = {
    nome: "André",
    criadoEm: new Date().toISOString()
}

console.log(usuario)

resultado:
{
    nome: "André",
    criadoEm: "2026-06-16T21:30:45.123Z"
}


*/