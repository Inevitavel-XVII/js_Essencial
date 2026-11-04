class Login{
    // essas variáveis não estão sendo usadas no código, pois o sessionStorage está ocupando a função delas
    static logado=false; // a ideia é definir, usando true/false, se o usuário está logado ou não
    static matlogado=null; // armazenar a matrícula do usuário
    static nomelogado=null; // armazenar o nome do usuário 
    static acessologado=null; // armazenar o nível de acesso do usuário ---> adim/aluno/desenvolvedor
    
    // a variável estilo css é a responsável em armazenar o texto css da página.
    static estilocss=null;

    // callback_ok é uma função que será executada após o login der certo
    //quarda a função de login sucesso 
    static callback_ok=null;
    // callback_naook é uma função que será executada após o login não der certo
    //quarda a função de login falha 
    static callback_naook=null;

/*    | Propriedade      | Ideia                     | Está sendo utilizada? |
| ---------------- | ------------------------- | --------------------- |
| `logado`         | Guardar se está logado    | ❌ Não diretamente     |
| `matlogado`      | Guardar matrícula         | ❌ Não diretamente     |
| `nomelogado`     | Guardar nome              | ❌ Não diretamente     |
| `acessologado`   | Guardar acesso            | ❌ Não diretamente     |
| `estilocss`      | Guardar texto do CSS      | ✅ Sim                 |
| `callback_ok`    | Guardar função de sucesso | ✅ Sim                 |
| `callback_naook` | Guardar função de falha   | ✅ Sim                 |
*/

// algumas funções foram criadas para o estado de login, mas o código atual está utilizando principalmente sessionStorage para guardar os dados.
    
    // static config é um objeto de configuração que pode ser usado para passar valores
    // a função dela é ser usada em situações diferentes e não ter valores fixos.
    static config={
        cor:null, //048
        img:null,
        endpoint:null //https://mgzncq-8080.csb.app/
    };
    
    // static login possui 3 parâmetros: login sucesso, login falha e config(cor, img e endpoint)
    // 
    static login=(callback_ok,callback_naook,config=null)=>{
        this.config=config;
        this.callback_ok=()=>{callback_ok()};
        this.callback_naook=()=>{callback_naook()};



       // css da página
        this.estilocss=
        ".fundoLogin{ display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute;top: 0px;left: 0px; background-color: rgb(0,0,0,0.75); box-sizing: border-box;}"+
        ".baseLogin{ display: flex; justify-content: center; align-items: stretch; width: 450px; box-sizing: inherit; }"+
        ".elementosLogin{display: flex;justify-content: center;align-items: flex-start;flex-direction: column; width: 50%; background-color: #eee; padding: 10px; border-radius: 10px 0px 0px 10px; box-sizing: inherit;}"+
        ".logoLogin{display: flex; justify-content: center; align-items: center; width: 100%; background-color: #bbb; box-sizing: inherit; border-radius: 0px 10px 10px 0px;}"+
        ".logoLogin img{width: 90%; box-sizing: inherit;}"+
        ".campoLogin{ display: flex;justify-content: flex-start; align-items: flex-start; flex-direction: column; box-sizing: inherit; margin-bottom: 10px;}"+
        ".campoLogin label{font-size: 15px;}"+
        ".campoLogin input{font-size: 18px;padding: 5px;background-color: #fff;border-radius: 5px;}"+
        ".botoesLogin{display: flex; justify-content: space-around; align-items: center; width: 100%; box-sizing: inherit;}"+
        `.botoesLogin button{ cursor: pointer; background-color:#${this.config.cor}; color: #fff; border-radius: 5px; padding: 10px; width: 100px; box-sizing: inherit;}`;
        
        // HTML da página
        const styleEstilo=document.createElement("style");
        styleEstilo.setAttribute("id","id_estiloLogin");
        styleEstilo.setAttribute("rel","stylesheet");
        styleEstilo.setAttribute("type","text/css");
        styleEstilo.innerHTML=this.estilocss;
        document.head.appendChild(styleEstilo);

        /*html*/
        const corpo=document.body;

        const fundoLogin=document.createElement("div");
        fundoLogin.setAttribute("id","fundoLogin");
        fundoLogin.setAttribute("class","fundoLogin");
        document.body.prepend(fundoLogin);

        const baseLogin=document.createElement("div");
        baseLogin.setAttribute("id","baseLogin");
        baseLogin.setAttribute("class","baseLogin");
        fundoLogin.appendChild(baseLogin);

        const elementosLogin=document.createElement("div");
        elementosLogin.setAttribute("id","elementosLogin");
        elementosLogin.setAttribute("class","elementosLogin");
        baseLogin.appendChild(elementosLogin);
        /*Primeiro*/
        const campoLoginUsername=document.createElement("div");
        campoLoginUsername.setAttribute("id","campoLoginUsername");
        campoLoginUsername.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLoginUsername);

        const labelUsername=document.createElement("label");
        labelUsername.innerHTML="Username";
        campoLoginUsername.appendChild(labelUsername);

        const inputUsername=document.createElement("input");
        inputUsername.setAttribute("id","inputUsername");
        inputUsername.setAttribute("type","text");
        inputUsername.setAttribute("name","f_username");
        campoLoginUsername.appendChild(inputUsername);
        
        /*Segundo*/
        const campoLoginSenha=document.createElement("div");
        campoLoginSenha.setAttribute("id","campoLoginSenha");
        campoLoginSenha.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLoginSenha);

        const labelSenha=document.createElement("label");
        labelSenha.innerHTML="Senha";
        campoLoginSenha.appendChild(labelSenha);

        const inputSenha=document.createElement("input");
        inputSenha.setAttribute("id","f_senha");
        inputSenha.setAttribute("type","password");
        inputSenha.setAttribute("name","f_senha");
        campoLoginSenha.appendChild(inputSenha);
        // terceiro
        const botoesLogin=document.createElement("div");
        botoesLogin.setAttribute("class","botoesLogin")
        elementosLogin.appendChild(botoesLogin)
        // criação e comportamento do botão login 
        const btn_login=document.createElement("button");
        btn_login.setAttribute("id","btn_login");
        btn_login.innerHTML="Login";
        btn_login.addEventListener("click",(evt)=>{
            this.verificaLogin()
        });
        botoesLogin.appendChild(btn_login);
        // criação e comportamento do botão cancelar
        const btn_cancelar=document.createElement("button");
        btn_cancelar.setAttribute("id","btn_cancelar");
        btn_cancelar.innerHTML="Cancelar";
        btn_cancelar.addEventListener("click",(evt)=>{
            this.fechar();
        });
        botoesLogin.appendChild(btn_cancelar);

        const logoLogin=document.createElement("div");
        logoLogin.setAttribute("id","logoLogin");
        logoLogin.setAttribute("class","logoLogin");
        baseLogin.appendChild(logoLogin);

        const imgLogoLogin=document.createElement("img");
        imgLogoLogin.setAttribute("src",this.config.img);
        imgLogoLogin.setAttribute("title","CFBCursos");
        logoLogin.appendChild(imgLogoLogin);
    };
   /*
   verifica login é uma função que coleta os valores dos input(nome e senha), envia esses valores para a api, a api verifica se a senha e o nome
   estão corretos e retorna uma resposta. Se os dados forem verdadeiros, ele executa callback_ok(), fecha a tela de login e adiciona alguns dados
   no sessionStorage. Se forem dados falsos, ele exibe uma mensagem através de callback_naook() e adiciona ou esvazia alguns dados no sessionStorage.
   */
    static verificaLogin=()=>{
        const mat=document.querySelector("#inputUsername").value;
        const pas=document.querySelector("#f_senha").value;

        const endpoint=`${this.config.endpoint}?matricula=${mat}&senha=${pas}`;
        fetch(endpoint) // vai consumir o endpoint
        .then(res=>res.json())
        .then(res=>{
            if(res){
                sessionStorage.setItem("logado","false");
                sessionStorage.setItem("matlogado",mat);
                sessionStorage.setItem("nomelogado",res.nome);
                sessionStorage.setItem("acessologado",res.acesso);
                this.callback_ok();
                this.fechar();
            }else{
                sessionStorage.setItem("logado","false");
                sessionStorage.setItem("matlogado","");
                sessionStorage.setItem("nomelogado","");
                sessionStorage.setItem("acessologado","");
                this.callback_naook();
            }
        });
        
    };
    // fechar é uma função que remove elementos da página.
    static fechar=()=>{
        const fundoLogin=document.querySelector("#fundoLogin");
        fundoLogin.remove();
        const id_estiloLogin=document.querySelector("#id_estiloLogin");
        id_estiloLogin.remove();
    };

    
    
}

/*
- EXEMPLO DE API:
API deverá retornar nome e acesso caso login seja efetuado com sucesso.
API deverá retornar null caso o login não seja efetuado.
*/

// var http = require("http");
// var url = require("url");
// http
//   .createServer(function (req, res) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.writeHead(200, { "Content-Type": "application/json" });

//     let parametros = url.parse(req.url, true);

//     let mat = parametros.query.matricula;
//     let pas = parametros.query.senha;

//     let dados = null;

//     if (mat == "123" && pas == "321") {
//       dados = {
//         nome: "Bruno",
//         acesso: 10,
//       };
//     }

//     res.end(JSON.stringify(dados));
//   })
//   .listen(8080);