const f_nome=document.querySelector("#f_nome")
const f_nota=document.querySelector("#f_nota")
const f_msg=document.querySelector("#f_msg")

const btn_validar=document.querySelector("#btn_validar")
btn_validar.addEventListener("click",(evt)=>{
    let msg=null
    if(f_nota.validity.valueMissing){
        msg="Poxa, este campo é obrigatório"
    }else if(f_nota.validity.rangeOverflow){
        msg="Nossa, que nota alta você digitou"
    }else if(f_nota.validity.rangeUnderflow){
        msg="Credo, que nota baixa você digitou"
    }
    // f_nota.reportValidity()
    f_msg.innerHTML=msg
    evt.preventDefault()
})

/*
-Métodos de validação do DOM
checkValidity() ----> respostas padrão
setCustomValidity()

-Propriedades de validação do DOM
validity
validationMessage

-Propriedades de Validação
customError: true, se uma mensagem de validação personalizada for definida.
patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
rangerOverFlow: true, se o valor de um elemento for maior que seu atributo max.
rangerUnderFlow: true, se o valor de um elemento for menor que seu atributo min.
stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
typeMismatch: true, se o valor de um elemento for inválido por seu atributo type.
valueMissing: true, se um elemento (com um atributo obrigatório) não tiver valor.
valid: true, se um valor de um elemento for válido.


O required presente no arquivo html significa que é um campo que é obrigatório preencher
O preventDefault não permite que o submit funcione, ele pode ser colocado no final ou no começo
*/