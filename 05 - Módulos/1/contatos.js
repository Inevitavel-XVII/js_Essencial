import {contatos} from "./bancoContatos.js";

// objeto literal com propriedades e funções que vão ser exportados
let contato={
    getTodosContatos:function(){
        return contatos // retorna todos os elementos dentro do array contatos.
    },
    getContatos:function(i_cont){ // 
        return contatos[i_cont] // se usado, retorna um elemento específico do array.
    },
    addContato:function(novoContato,destinoDOM){
        // const cont cria um objeto novo de acordo com o valor do input do html e o médoto push() adiciona ele no array
        const cont={
        nome:novoContato.nome,
        telefone:novoContato.telefone,
        email:novoContato.email
        }
        contatos.push(cont)
        
        destinoDOM.innerHTML=""

        contatos.forEach((c)=>{
            const div=document.createElement("div")
            div.setAttribute("class","contato")
            const p_nome=document.createElement("p")
            p_nome.innerHTML=c.nome
            const p_telefone=document.createElement("p")
            p_telefone.innerHTML=c.telefone
            const p_mail=document.createElement("p")
            p_mail.innerHTML=c.email
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_mail)
            destinoDOM.appendChild(div)
        })
    }
}

export default contato

/*

*/