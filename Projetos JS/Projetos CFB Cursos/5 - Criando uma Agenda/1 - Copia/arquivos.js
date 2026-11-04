const cabecalho=document.querySelector("#cabecalho");
const menu=document.querySelector("#menu");
const btn_home=document.querySelector("#btn_home");
const btn_novo=document.querySelector("#btn_novo");
const btn_pesquisar=document.querySelector("#btn_pesquisar");
const btn_gestao=document.querySelector("#btn_gestao");
const btn_sobre=document.querySelector("#btn_sobre");
const principal=document.querySelector("#principal");


btn_home.addEventListener("click",(evt)=>{
    // console.log(evt.target);
    selecionarAba(evt.target);
    window.open("./home.html","if_principal");
});
btn_novo.addEventListener("click",(evt)=>{
    selecionarAba(evt.target);
    window.open("./novo.html","if_principal");
});
btn_pesquisar.addEventListener("click",(evt)=>{
    selecionarAba(evt.target);
    window.open("./pesquisar.html","if_principal");
});
btn_gestao.addEventListener("click",(evt)=>{
    selecionarAba(evt.target);
    window.open("./gestao.html","if_principal");
});
btn_sobre.addEventListener("click",(evt)=>{
    selecionarAba(evt.target);
    window.open("./sobre.html","if_principal");
});

// atravé do querySelectorAll você obtém todos os elementos com aba, depois coloca ele entre [...] e vira um array
//você pecorre o array abas e remore a classe "abaSelecionada" de todos os elementos e adicona essa mesma classe apenas ao que está selecionado
const selecionarAba=(el)=>{
    const abas=[...document.querySelectorAll(".aba")];
    abas.forEach(e=>{
        e.classList.remove("abaSelecionada")
    })
    el.classList.add("abaSelecionada");
    // console.log(abas);
};