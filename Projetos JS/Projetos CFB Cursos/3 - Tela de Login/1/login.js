class Login{
    static logado=false;
    static matlogado=null;
    static nomelogado=null;
    static acessologado=null;
    static endpoint="https://mgzncq-8080.csb.app/";
    
    static login=(mat,pas)=>{
        this.endpoint+=`?matricula=${mat}&senha=${pas}`; // endpoint contruído
        fetch(this.endpoint) // vai consumir o endpoint
        .then(res=>res.json())
        .then(res=>{
            if(res){
            this.logado=true;
            this.matlogado=mat;
            this.nomelogado=res.nome; //acessa a chave que existe dentro do objeto dados
            this.acessologado=res.acesso; //acessa a chave que existe dentro do objeto dados
            console.log(res)
            }else{
                console.log("Usuário não encontrado")
            }
        })
    };
}

export {Login};