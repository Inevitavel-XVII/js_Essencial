const url=document.getElementById("url")
const btn_url=document.getElementById("btn_url")

btn_url.addEventListener("click",(evt)=>{
  // window.location="https://www.google.com/?zx=1782965621199"
  // window.location.replace("https://www.google.com/?zx=1782965621199")
  // window.location.assign("https://www.google.com/?zx=1782965621199")
  // window.location.reload()
  // window.history.back()
  // window.history.forward()
  // window.history.go(1)
  // console.log(window.history.length)
  // console.log(url.value)
  window.location=url.value
})

/*
O que é o location?

O location é uma propriedade do objeto window que representa a URL da paágina. Ele acessa ou altera o endereço da página.

Métodos:

location="página.html" - vai para outra página.

location.href - Obtém ou altera a URL completa.

location.reload() - recarrega a página.

location.assign("página.html") - navega para outra página e mantém o histórico. - é igual ao primeiro exemplo, mas deixa evidente que você 
está usando um método para fazer isso

location.replace("página.html") - Navega para outra página sem manter a página atual no histórico

location.protocol - retorna o protocolo (http: ou https:).

location.hostname - retorna o domínio.

location.pathname - retorna o caminho da página.

location.search - retorna query string(parãmetro após ?)

location.has - retorna fragmento(parte após #)

.O que é URL?
URL significa Uniform Resource Locator (Localizador Uniforme de Recursos).

É o endereço de um recurso da internet.

.O que é um domínio?
É o nome do site.

.O que é o histórico?
É uma lista de páginas que o navegador visitou. Quando você usa o replice(), ele apaga a lista

.O que são http e https?
São protocolo de comunição usado entre navegador e servidor. Eles servem para padronizar a forma como o servidor e o navegador podem se 
comunicar.
http:
Quando você acessa uma página através de um link, o navegador faz uma requisição ao servidor. O servidor responde enviando vários dados: 
HTML, CSS, IMAGENS, VÍDEOS ETC. Tudo isso usando protocolo http

http: É a mesma coisa do http, mas existe uma camada de proteção criptografada para dificultar o ataque de hackers 
*/