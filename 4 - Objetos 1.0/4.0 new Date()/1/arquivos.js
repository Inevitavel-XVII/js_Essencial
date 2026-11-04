const div_data=document.getElementById("div_data")
const div_relogio=document.getElementById("div_relogio")

// acessando a data 
const data=new Date()

let dia=data.getDate() // pega a data do dia 
dia=dia<10?"0"+dia:dia // se o dia for menor que 10, adicionar 0. se não, apenas dia
let mes=data.getMonth() // pega a data do mês
mes=mes<10?"0"+mes:mes // se o mês for menor que 10, adicionar 0. se não, apenas mês
const data_r=dia+"/"+mes+"/"+data.getFullYear() // associa todas as variáveis à cosntante data_r, com "/" entre cada uma.
div_data.innerHTML=data_r // adiciona data_r no DOM. O dia, mês e ano ficam ordenado igual a uma string

// criando um relógio
const relogio=()=>{
  const data=new Date()
  let hora=data.getHours()
  hora=hora<10?"0"+hora:hora
  let minuto=data.getMinutes()
  minuto=minuto<10?"0"+minuto:minuto
  let segundo=data.getSeconds()
  segundo=segundo<10?"0"+segundo:segundo
  const hora_completa=hora+":"+minuto+":"+segundo
  div_relogio.innerHTML=hora_completa
}

const intervalo=setInterval(relogio,1000)