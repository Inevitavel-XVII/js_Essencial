import { Login } from "./login.js";
import { Cxmsg } from "./cxmsg_20.js";

const callback_ok=()=>{
    
}
const callback_naook=()=>{
    const config={
        cor:"#800",
        tipo:"ok",
        textos:null,
        comando_sn:null,
    }
    Cxmsg.mostrar(config,"Erro","Login não efetuado! Usuário ou senha incorretos.");
}

Login.login(callback_ok,callback_naook);

// this.cor=config.cor
//         this.tipo=config.tipo
//         this.textos=config.textos
//         this.comando_sn=()=>{config.comando_sn()}