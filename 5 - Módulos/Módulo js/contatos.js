import {contatos} from "./bancoContatos.js";

// objeto literal com propriedades e funções que vão ser exportados
let contato={
    getTodosContatos:()=>{
        return contatos // retorna todos os elementos dentro do array contatos.
    },
    getContatos:(i_cont)=>{ // 
        return contatos[i_cont] // se usado, retorna um elemento específico do array.
    },
    radioSelecionado:()=>{
        let todosRadios=[...document.querySelectorAll('input[type=radio]')] //você criou uma variável que acessa todos os input da página do tipo radio
        let radioSelecionado=todosRadios.filter((el,ind,arr)=>{
        return el.checked 
        })
        return radioSelecionado[0]
    },
    addContato:(novoContato,destinoDOM)=>{
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

            // input radio
            const rb=document.createElement('input')
            rb.setAttribute('type','radio')
            rb.setAttribute('name','rb_curso')

            div.appendChild(rb)
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