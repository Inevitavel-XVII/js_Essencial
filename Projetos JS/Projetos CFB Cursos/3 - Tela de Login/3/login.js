class Login{
    static logado=false;
    static matlogado=null;
    static nomelogado=null;
    static acessologado=null;
    static estilocss=null;
    static callback_ok=null;
    static callback_naook=null;
    static config={
        cor:"048",
        img:"./foto.png"
    };
    static endpoint="https://mgzncq-8080.csb.app/";
    
    static login=(callback_ok,callback_naook,config=null)=>{
        if(config!=null){
            this.config=config;
        }
        this.callback_ok=()=>{callback_ok()};
        this.callback_naook=()=>{callback_naook()};
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

        const btn_login=document.createElement("button");
        btn_login.setAttribute("id","btn_login");
        btn_login.innerHTML="Login";
        btn_login.addEventListener("click",(evt)=>{
            this.verificaLogin()
        });
        botoesLogin.appendChild(btn_login);

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

    static verificaLogin=()=>{
        const mat=document.querySelector("#inputUsername").value;
        const pas=document.querySelector("#f_senha").value;

        const endpoint=`https://mgzncq-8080.csb.app/?matricula=${mat}&senha=${pas}`;
        fetch(endpoint) // vai consumir o endpoint
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado=true;
                this.matlogado=mat;
                this.nomelogado=res.nome; //acessa a chave que existe dentro do objeto dados
                this.acessologado=res.acesso; //acessa a chave que existe dentro do objeto dados
                this.callback_ok();
                this.fechar();
            }else{
                this.logado=false;
                this.matlogado=null;
                this.nomelogado=null; //acessa a chave que existe dentro do objeto dados
                this.acessologado=null; //acessa a chave que existe dentro do objeto dados
                this.callback_naook();
            }
        });
        
    };

    static fechar=()=>{
        const fundoLogin=document.querySelector("#fundoLogin");
        fundoLogin.remove();
        const id_estiloLogin=document.querySelector("#id_estiloLogin");
        id_estiloLogin.remove();
    };

    
    
}

export {Login};