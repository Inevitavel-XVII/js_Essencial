import c from "./contatos.js";
const listarContatos=document.getElementById("listaContatos")
const btn_gravar=document.getElementById("btn_gravar")
const btn_apagar=document.getElementById("btn_apagar")

btn_gravar.addEventListener("click",(evt)=>{
    const cont={
        nome:document.getElementById("f_nome").value,
        telefone:document.getElementById("f_telefone").value,
        email:document.getElementById("f_email").value
    }
    c.addContato(cont,listarContatos)
    console.log(c.getTodosContatos())
})

btn_apagar.addEventListener("click",(evt)=>{
    const rs=c.radioSelecionado()//aqui você tá fazendo a chamada da função, ela está escrita na linha 44  
    if(rs!=undefined){
      const cursoSelecionado=rs.parentNode // Navegação no DOM: radioSelecionado → pai → pai => remove elemento ----------- NAVEGAÇÃO DO DOM
      cursoSelecionado.remove()// você remove o elemento
    }else{
      alert("Selecione um Curso")
    }
})