const numero=document.querySelector("#numero")
const btn_promessa=document.querySelector("#btn_promessa")

btn_promessa.addEventListener("click",(evt)=>{
  numero.innerHTML="Processando..."
  promessa()
  // then é para o retorno positivo
  .then((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.remove("erro")// remove propriedade css "erro"
    numero.classList.add("ok")// adiciona propriedade css "ok"
  })
  // catch é para o retorno do erro
  .catch((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.add("erro")// adiciona propriedade css "erro"
    numero.classList.remove("ok")// remove propriedade css "ok"
  }) 
})

const promessa=()=>{
  let p=new Promise((resolve,reject)=>{
  let resultado=true // estado boleano
  let timeout=3000 // definição do tempo
  setTimeout(() => {
    if(resultado){
      resolve("Deu tudo certo")
    }else{
      reject("Deu tudo errado")
    }
  }, timeout);
  })
  return p 

}

numero.innerHTML="Esperando"