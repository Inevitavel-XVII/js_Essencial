import { Login } from "./login.js";
import { Cxmsg } from "./caixa de mensagem/cxmsg.js"

const callback_ok=()=>{
    alert("ok");
}
const callback_naook=()=>{
    alert("não ok");
}

Login.login(callback_ok,callback_naook);