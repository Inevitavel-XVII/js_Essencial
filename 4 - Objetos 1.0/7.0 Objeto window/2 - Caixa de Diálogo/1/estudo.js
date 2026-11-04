const btn_alert=document.getElementById("btn_alert")
const btn_confirm=document.getElementById("btn_confirm")
const btn_prompt=document.getElementById("btn_prompt")

btn_alert.addEventListener("click",(evt)=>{
  alert("Olá, como você está?")
})
// como fica subentendido que o true é o if e o else é o false quando o confirm retorna o resultado?
btn_confirm.addEventListener("click",(evt)=>{
  // cont ret=confirm("Você está aprendendo?")
  if(confirm("Você está aprendendo?")){
    console.log("Botão OK pressionado")
  }else{
    console.log("Botão CANCELAR pressionado")
  }
})
// como fica subentendido que o true é o if e o else é o false quando o prompt retorna o resultado?
btn_prompt.addEventListener("click",(evt)=>{
  const nome=prompt("Digite seu nome", "Bruno")
  if(nome==null){
    console.log("Botão CANCELAR pressionado")
  }else{
    console.log("Nome digitado:", nome)
  }
})

/*
As caixas de diálogos são janelas prontas que o própio navegador fornece para interagir rapidamente com o usuário. Elas fazem parte do objeto 
global do window, apesar de serem escritas apenas com o nome da função.

EXEMPLO:
window.alert()= alert() -----> isso serve para os outros exemplos.

.1 - ALERT:
É a caixa de mensagem mais simples. Serve apenas para mostrar uma mensagem.

Sintaxe:
alert(mensagem)
ou
window.alert(mensagem)

.Parâmetro:
O parâmetro dentro do alert é o texto que é exibido na tela.
EXEMPLO:
alert("Cadastro realizado com sucesso!")

Aparece uma janela da seguinte forma:
------------------------
 Cadastro realizado com sucesso!

          [OK]
------------------------
O usuário apenas pode clicar em "ok", não existe retorno

.Quando usar?

Hoje em dia é pouco usado em sistemas profissionais.

É útil para:

-testes rápidos;
-estudar JavaScript;
-mensagens muito simples.

Não é indicado para interfaces modernas.


.2 - Confirm:

Essa caixa de diálogo é usado quando você quer que o usuário tome uma decisão. 
Ele possui 2 botões: ok(true) e cancelar(false)

Sintaxe:
confirm(mensagem)

Retorno:
Se o usuário clicar em ok, o retorno é true. Se ele clicar em cancelar, o retorno é false. Se você colocar o confirm em um if/else, o valor de if torna-se 
automaticamente em true e else em false. 

.Quando usar

Muito usado para confirmar ações importantes.

Exemplos:

Excluir usuário?
Deseja sair?
Tem certeza que deseja apagar?
Confirmar compra?
Confirmar envio?

.3 - Prompt:

É usado quando você quer que o usuário adicione uma informação.

Sintaxe:
prompt(mensagem)
ou
prompt(mensagem,valorPadrão)################ O SEGUNDO VALOR É OPCIONAL ################

O primeiro parâmetro é a pergunta e o segundo é valor inicial da caixa.
Exemplo:
prompt("Digite seu nome", "Bruno")

Digite seu nome

[         Bruno           ]

OK    Cancelar

O usuário pode apertar ok, cancelar ou alterar o nome.

.Retorno:

Se clicar em ok, o retorno é uma string. Se clicar em cancelar, o retorno é null


############# Essas funções "pausam" o programa ##################

Uma característica importante é que essas três funções são bloqueantes.

Isso significa que, quando uma delas é chamada, o JavaScript interrompe a execução do restante do código até que o usuário responda.


- Quando usar cada uma?

| Função      | Retorno                              | Quando usar                                                            |
| ----------- | ------------------------------------ | ---------------------------------------------------------------------- |
| `alert()`   | Não retorna valor útil (`undefined`) | Informar algo simples ao usuário.                                      |
| `confirm()` | `true` ou `false`                    | Confirmar ações importantes, como excluir ou enviar dados.             |
| `prompt()`  | `string` ou `null`                   | Solicitar uma informação rápida do usuário, como um nome ou um código. |



*/