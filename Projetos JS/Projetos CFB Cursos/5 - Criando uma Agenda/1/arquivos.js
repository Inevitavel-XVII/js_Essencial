const cabecalho=document.querySelector("#cabecalho");
const menu=document.querySelector("#menu");
const btn_home=document.querySelector("#btn_home");
const btn_novo=document.querySelector("#btn_novo");
const btn_pesquisar=document.querySelector("#btn_pesquisar");
const btn_filtrar=document.querySelector("#btn_filtrar")
const btn_gestao=document.querySelector("#btn_gestao");
const btn_sobre=document.querySelector("#btn_sobre");
const principal=document.querySelector("#principal");


btn_home.addEventListener("click",(evt)=>{
    // console.log(evt.target);
    abrirPagina(evt.target,"./home.html");
});
btn_novo.addEventListener("click",(evt)=>{
    abrirPagina(evt.target,"./novo.html");
});
btn_pesquisar.addEventListener("click",(evt)=>{
    abrirPagina(evt.target,"./pesquisar.html");
});
btn_filtrar.addEventListener("click",(evt)=>{
    abrirPagina(evt.target,"./filtrar.html");
});
btn_gestao.addEventListener("click",(evt)=>{
    abrirPagina(evt.target,"./gestao.html");
});
btn_sobre.addEventListener("click",(evt)=>{
    abrirPagina(evt.target,"./sobre.html");
});

// atravé do querySelectorAll você obtém todos os elementos com aba, depois coloca ele entre [...] e vira um array
// você pecorre o array abas e remove a classe "abaSelecionada" de todos os elementos e adicona essa mesma classe apenas ao que está selecionado
// o uso do window dentro da função evita escrever repetidamente o window dentro de cada botão.
const abrirPagina=(el,url)=>{
    const abas=[...document.querySelectorAll(".aba")];
    abas.forEach(e=>{
        e.classList.remove("abaSelecionada")
    })
    el.classList.add("abaSelecionada");
    window.open(url,"if_principal");
};