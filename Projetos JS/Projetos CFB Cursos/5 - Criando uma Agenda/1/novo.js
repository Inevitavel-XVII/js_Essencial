const btn_gravar=document.querySelector("#btn_gravar");
const btn_cancelar=document.querySelector("#btn_cancelar");
const f_nome=document.querySelector("#f_nome");
const f_celular=document.querySelector("#f_celular");
const f_email=document.querySelector("#f_email");
const f_dtnasc=document.querySelector("#f_dtnasc");

// botão gravar pega os valores do input, que você quer salvar, e envia para o servidor através de um post
btn_gravar.addEventListener("click",(evt)=>{
    const dados={
        "f_nome":f_nome.value,
        "f_celular":f_celular.value,
        "f_email":f_email.value,
        "f_dtnasc":f_dtnasc.value,
    }
    const cabecalho={ // objeto que define o tipo de requsisição e converte o objeto valores em um objeto JSON
        method:'POST',
        body: JSON.stringify(dados)
    }
    const endpoint="http://127.0.0.1:1880/addcontatos" //associa a URL a uma constante
    fetch(endpoint,cabecalho) 
    .then(res=>{
        if(res.status==200){
            // console.log("Ok");
            f_nome.value="";
            f_celular.value="";
            f_email.value="";
            f_dtnasc.value="";
            f_nome.focus();
        }else{
            alert("Erro ao gravar novo Contato");
        }
    })
});

const endpoint="http://127.0.0.1:1880/contatos"
fetch(endpoint)
.then(res=>res.json())
.then(res=>{
    console.log(res);
})

btn_cancelar.addEventListener("click",(evt)=>{
    reset();
});

const reset=()=>{
    f_nome.value="";
    f_celular.value="";
    f_email.value="";
    f_dtnasc.value="";
    f_nome.focus();
};