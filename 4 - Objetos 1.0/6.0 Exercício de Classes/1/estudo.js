// /*VARIÁVEIS QUE PERMITEM O ACESSO AO DOM*/
// const palco=document.querySelector("#palco")
// const num_objetos=document.querySelector("#num_objetos")
// const txt_qtde=document.querySelector("#txt_qtde")
// const btn_add=document.querySelector("#btn_add")
// const btn_remover=document.querySelector("#btn_remover")


// /*
// .Porque existe essa parte do código?
// É a preparação inicial do programa. Cada variável tem uma função diferente no funcionamento da animação.
// */
// let larguraPalco=palco.offsetWidth// limite horizontal das bolas ->
// let alturaPalco=palco.offsetHeight// limite vertical das bolas -> 
// let bolas=[] // guarda todas as instâncias da classe Bola -> como todas as instâncias da classe bola são armazenados aqui?
// let numBola=0 // contador visual de quantas bolas existem. -> como o contador visual de bolas existentes funciona?
// /*
// O que exatamente o offsetWidth faz?
// Ele pega:
// largura do conteúdo(width) + padding + bordas
// EXEMPLO:
// - CSS:
// div{
// width:500px;
// padding20px;
// border: 5px solid black;
// }

// Visualmente:
// |--------------------------------|
// |                                |
// |        conteúdo 500px          |
// |                                |
// |--------------------------------|

// padding + borda aumentam o tamanho

// O offsetWidth vai retornar:
// 500+40+10=550px

// porque ele conta:

// -largura
// -padding esquerdo/direito
// -borda esquerda/direita

// O valor da largura e da altura foram associados cada um em uma variável diferente. Ao fazer isso, é possível definir o limite que as "div" podem ir.

// - O que é min-height?
// esse valor min-height é "altura mínima que o elemeno pode ter. Por exemplo:

// min-height:500px; -> essa div não pode ter menos que 500px de altura, mas ela pode aumentar de tamanho - se necessário.

// - o que é 100vh?
// vh significa: viewport heigth = altura da janela do navegador
// Por exemplo:
// A tela possui um valor de 900px de altura, então 100vh será 900px.
// Se houver min-height:100vh;
// Então o palco terá no mínimo a altura total da tela



// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// */
// class Bola{
//     constructor(arrayBolas,palco){
//         this.tam=Math.floor(Math.random()*15)+10 // o valor de "tam" varia de 0 a 24px
//         this.r=Math.floor(Math.random()*255) // cor aleatória - o valor de r varia entre 0 a 254
//         this.g=Math.floor(Math.random()*255) // cor aleatória - o valor de g varia entre 0 a 254
//         this.b=Math.floor(Math.random()*255) // cor aleatória - o valor de b varia entre 0 a 254
//         this.px=Math.floor(Math.random()*larguraPalco-this.tam) // posição x inicial aleatória dentro do palco -> largura
//         this.py=Math.floor(Math.random()*alturaPalco-this.tam) // posição y inicial aleatória dentro do palco -> altura
//         this.velx=Math.floor(Math.random()*2)+0.5 // velocidade horizontal aleatória
//         this.vely=Math.floor(Math.random()*2)+0.5 // velocidade vertical aleatória
//         this.dirx=(Math.random()*10)>5?1:-1 // se o valor aleatório entre 0 a 10 for maior que 5, o valor será 1. se não, será -1
//         this.diry=(Math.random()*10)>5?1:-1 // se o valor aleatório entre 0 a 10 for maior que 5, o valor será 1. se não, será -1
//         this.palco=palco // armazena a referência do elemento html do palco
//         this.arrayBolas=arrayBolas // armazena a referência do array global de bolas
//         this.id=Date.now()+"_"+Math.floor(Math.random()*100000000000000) // gera um id único combinando o timestamp com um valor gigante aleatório.
//         this.desenhar() // chama o método para criar a bolinha do html
//         this.controle=setInterval(this.controlar,10) // inicia um loop que roda o método 'controlar' a cada 10 milissegundo para mover a bola.
//         this.eu=document.getElementById(this.id) // guarda a referência do elemento HTML da própria bolinha que acabou de ser desenhada
//         numBola++ // incrementa o contador global de bolinhas.
//         num_objetos.innerHTML=numBola // atualiza o número exibido na tela.
//     }
//     minhaPos=()=>{
//         return this.arrayBolas.indexOf(this) // procura a própia bolinha dentro do array global e retorna o seu índice (posição na lsta)
//     }
//     /*
//     indexOf() é um método para encontrar o índice de um elemento dentro um índice.
//     Ele tem função nenhuma dentro do projeto. Se você precissase remover uma bola pelo número, seria útil.###pesquisar sobre isso no tempo livre###
//     */
//     remover=()=>{
//         clearInterval(this.controle) // Para o setInterval, fazendo a bolinha parar de se mover internamente
//         bolas=bolas.filter((b)=>{ // filtra o array global para remover ela mesma
//             if(b.id!=this.id){
//                 return b // mantém no array apenas as bolas que não tem o id desta bola.
//             }
//         })
//         this.eu.remove() // remove a tag div da bolinha do HTML (some da tela)
//         numBola-- // diminui o contador de bolinhas
//         num_objetos.innerHTML=numBola // atualiza o painel com o novo número menor
//     }

//     desenhar=()=>{
//         const div=document.createElement("div") // Cria um novo elemento <div> na memória.
//         div.setAttribute("id",this.id)           // Adiciona o ID único criado no construtor a essa div.
//         div.setAttribute("class","bola")         // Adiciona a classe CSS "bola" para pegar o estilo de círculo.
//         // Aplica os estilos dinâmicos (posição, tamanho e a cor RGB aleatória) via inline style:
//         div.setAttribute("style",`left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
//         this.palco.appendChild(div)               // Insere essa nova div dentro do palco HTML para ela aparecer de fato.
//     }

//     controle_bordas = () => {
//         if(this.px+this.tam>=larguraPalco) { // Se a bola bater ou passar da borda direita...
//             this.dirx = -1                        // Inverte a direção horizontal para a esquerda.
//         }else if(this.px<=0) {                // Se ela bater ou passar da borda esquerda...
//             this.dirx = 1                         // Inverte a direção horizontal para a direita.
//         }
//         if(this.py+this.tam>=alturaPalco) {  // Se ela bater ou passar do chão (borda inferior)...
//             this.diry = -1                        // Inverte a direção vertical para cima.
//         }else if(this.py<=0) {                // Se ela bater ou passar do teto (borda superior)...
//             this.diry = 1                         // Inverte a direção vertical para baixo.
//         }
//     }

//     controlar=()=>{
//         this.controle_bordas()                    // Verifica se bateu nas bordas e altera a direção se necessário.
//         this.px+=this.dirx*this.velx          // Atualiza a posição X somando a velocidade na direção correta.
//         this.py+=this.diry*this.vely          // Atualiza a posição Y somando a velocidade na direção correta.
//         // Atualiza visualmente a posição da bolinha na tela alterando o 'left' e o 'top' do CSS:
//         this.eu.setAttribute("style",`left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
//         // Uma segurança extra: se por algum erro ela sair completamente dos limites do palco...
//         if((this.px > larguraPalco) || (this.py > alturaPalco)) {
//             this.remover()                        // Ela é destruída para não quebrar o layout.
//         }
//     }


// }
// // Cada bolinha no dom será criado e manipulado por um objeto bola instanciado no array bolas, é importante saber o id.
// // por isso é criado os parametros dentro do construtor

// // No id: se você criar 10 bolinhas, todas as 10 vão ter o mesmo timestamp. então você vai pegar o 'math' para usar o timestamp+"número aleatório"
// window.addEventListener("resize",(evt)=>{
//     let larguraPalco=palco.offsetWidth
//     let alturaPalco=palco.offsetHeight
// })

// btn_add.addEventListener("click", (evt) => {
//     const qtde=txt_qtde.value  // Pega o número digitado pelo usuário no input.
//     for(let i=0;i<qtde; i++) { // Cria um loop que vai rodar essa quantidade de vezes.
//         bolas.push(new Bola(bolas, palco)) // Instancia uma nova Bola e joga ela para dentro do array global.
//     }
// })
// btn_remover.addEventListener("click", (evt) => {
//     bolas.map((b) => {  // Percorre cada uma das bolinhas salvas no array.
//         b.remover()  // Aciona o método interno de remoção de cada uma delas.
//     })
// })



//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// cada elemento do html é associado à uma variável, dessa forma você pode manipular o objeto DOM
const palco=document.querySelector("#palco")
const num_objetos=document.querySelector("#num_objetos")
const txt_qtde=document.querySelector("#txt_qtde")
const btn_add=document.querySelector("#btn_add")
const btn_remover=document.querySelector("#btn_remover")

// essa parte do código define pontos importantes do código. Associa a altura e a largura, cada uma, à variáveis.
let larguraPalco=palco.offsetWidth // largura
let alturaPalco=palco.offsetHeight  // altura
// todo objeto criado pelo botão adicionar será armazenado no array, dessa forma você não perderá dados e poderá manipulá-los
let bolas=[]
let numBola=0

class Bola{
    constructor(arrayBolas,palco){
        // "tam" possui um valor aleatório entre 0 e 24 - "tam" será o tamanho da bola
        this.tam=Math.floor(Math.random()*15)+10 
        // cor aleatória do objeto que varia entre 0 a 254
        this.r=Math.floor(Math.random()*255) 
        this.g=Math.floor(Math.random()*255) 
        this.b=Math.floor(Math.random()*255)
        // px e py possui um valor aleatório entre 0 e o limite da palco, espaço limite que o objeto não consegue ultrapassar e existir
        /*
        Parte 1:
        Math.random()=> entre 0 a 0,999...
        Digamos que o valor gerado seja 0.7
        Parte 2:
        larguraPalco=500
        0.7*larguraPalco(500)= 0.7 * 500 = 350
        Parte 3:
        O resultado aleatório de "tam" é entre 0 e 24
        Digamos que o valor gerado seja 20
        Parte 4:
        350 - this.tam(20) = 350 - 20 = 330
        Então this.px=330
        CONCLUSÃO:
        A bola começa na posição horizontal 330px. O mesmo vale para o py. Digamos que o valor vertical(py), que passou pelo mesmo cálculo, desse objeto seja 480
        O Math.floor é para transformar o valor de ponto flutuante(0,7) em um valor inteiro de 7. Serve para qualquer número de ponto flutuante
        */  
        this.px=Math.floor(Math.random()*larguraPalco-this.tam) 
        this.py=Math.floor(Math.random()*alturaPalco-this.tam)
        // o valor de velx e vely é entre 0 a 2.5. velx e vely são a velocidade que o objeto se movimenta. 
        this.velx=Math.floor(Math.random()*2)+0.5 
        this.vely=Math.floor(Math.random()*2)+0.5
        // dirx e diry possui um valor de 1 ou -1. o valor será definido através de um ternário. dirx e diry são a direção do objeto. 
        this.dirx=(Math.random()*10)>5?1:-1 
        this.diry=(Math.random()*10)>5?1:-1
        // não sei o que escrever, você me ajuda? por que ele precisou criar palco, arrayBolas e associalos com "this" dentro do construtor?
        this.palco=palco 
        this.arrayBolas=arrayBolas
        // O valor de id é o timestamp atual + valor inteiro aleatório gigante 
        this.id=Date.now()+"_"+Math.floor(Math.random()*100000000000000)
        // desenhar cria uma div e acrescenta como atributo o id, cor, tamanho iguais na altura e largura 
        this.desenhar() 
        // controle possui o valor de controlar que é atualizado a cada segundo. controlar move a bola na tela
        this.controle=setInterval(this.controlar,1)
        // guarda a referência do elemento html da bolinha que acabou de ser criado. isso seria redundante? 
        this.eu=document.getElementById(this.id)
        numBola++
        num_objetos.innerHTML=numBola
    }
    // esse método permite você obter o índice de um elemento. mas como isso seria possível? ou seria obter um elemento através do índice?
    minhaPos=()=>{
        return this.arrayBolas.indexOf(this) 
    }
    // serve para remover todos os elementos da página, mas não sei como funciona a lógica do filter desse método e a função de numBola--. Para que serve o numBola--
    // sendo que já existe o this.eu.remove()
    /* ok, o parâmetro b dentro de filter representa todos os objetos que serão iterados de acordo com a condição do filter, mas o que é esse "b.id" dentro do filter?
    exemplo:
        if(b.id!=this.id){
                    return b
                }
    */ 
    remover=()=>{
        clearInterval(this.controle)
        bolas=bolas.filter((b)=>{ // o que é esse bolas? é uma variável interna do método? se for um let dentro do método, não é preciso escrever o let antes do bolas?
            if(b.id!=this.id){
                return b
            }
        })
        /*
        bolas é a variável "let bolas=[]" declarada em escopo global. portanto, ela se comporta igualmente a um "var"
        o método filter aplicado na variável bola é "se o id do elemento que está sendo iterado for diferente de 'this.id', ele retorna o elemento"
        Então como funciona? Esse método é executado a cada iteração do método map existente dentro do botão remover.
        
        Exemplo:
        
        bolas = [Bola1, Bola2, Bola3]
        
        O map:
        bolas.map((b)=>{
          b.remover()
        })

        - 1° iteração:
        b = Bola1 -> primeiro dado do array
        
        .executa:
        Bola1.remover()

        .Por dentro do remover():
        bolas = bolas.filter((b)=>{                  // o parâmetro dentro do filter é Bola1(primeiro dado do array)
            return b.id != this.id
        })

        .O que acontece?
        b.id=this.id
        Então ele é removido, pois o filter retorna apenas os dados que forem diferente de thi.id(b.id != this.id)
        .O filter cria um novo array:
        novoArray = [Bola2,Bola3]

        - 2ª iteração do map:

        Agora o map chama:

        Bola2.remover()

        O filter não usa mais:

        [
        Bola1,
        Bola2,
        Bola3
        ]

        Ele usa o valor atual de bolas:

        [
        Bola2,
        Bola3
        ]

        .O filter da nova iteração retorna um novo array:
        [Bola3]
        
        - 3° iteração do map:
        .O filter() recebe: [Bola3]. Como a condição do filter(), que está dentro do método remover() - que pertence a classe Bola(), é:
        if(b.id!=this.id){
                return b
            }
        O dado é "false" e o que o filter retorna é [], um array vazio.

        Observação nesse código: A cada iteração o filter() altera o array original. Cada filter() retorna o array original alterado. O filter() seguinte não 
        cria um array novo e retorna um resultado. O filter() não altera o array do filter() anterior - isso só seria possível se fosse 
        pré-definido em cada filter().


        */
        this.eu.remove() // "eu" é uma div da tela, o remove serve para tirar a div da tela. quem vai remover o elemento da tela é o "filter()"
        numBola-- // esse numBola é o mesmo numBola que está definido no começo como numBola=0?
        num_objetos.innerHTML=numBola
    }
    // esse método serve para criar a div com seus atributos. mas não consigo entender muito bem essa parte:
    // div.setAttribute("style",`left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
    desenhar=()=>{
        const div=document.createElement("div")
        div.setAttribute("id",this.id)
        div.setAttribute("class","bola")
        div.setAttribute("style",`left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
        this.palco.appendChild(div)
    }
    //controle_bordas define a direção do objeto.
    controle_bordas=()=>{
        if(this.px+this.tam >= larguraPalco){// se px+tam for maior ou igual a larguraPalco, então dirx=-1
            this.dirx=-1
        }else if(this.px <= 0){// se px for menor ou igual a 0, dirx=1
            this.dirx=1
        }
        if(this.py+this.tam >= alturaPalco){// se py+tam for maior ou igual a larguraPalco, então diry=-1
            this.diry=-1
        }else if(this.py <= 0){// se py for menor ou igual a 0, diry=1
            this.diry=1
        }
    }
    // queria entender a lógica desse método e o setAttribute associado ao "this.eu"
    // por que é usado px em 'top:${this.py}px;', 'height:${this.tam}px;' e em 'background-color:rgb(${this.r},${this.g},${this.b})`)' não é usado?
    // o if dentro desse método serve para remover o objeto caso ele passe o tamanho de palco? isso seria fora de lógica, porque em controle_bordas está definido
    // que a bola deve mudar a direção caso chegue no final?
    controlar=()=>{
        this.controle_bordas()
        this.px+=this.dirx*this.velx
        this.py+=this.diry*this.vely
        this.eu.setAttribute("style",`left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
        if((this.px > larguraPalco) || (this.py > alturaPalco)){
            this.remover()
        }
    }


}

// para que serve esse "resize"?
window.addEventListener("resize",(evt)=>{
    let larguraPalco=palco.offsetWidth
    let alturaPalco=palco.offsetHeight
})

// por que é necessário bolas e palco dentro dos parâmetros da classe new Bola?
btn_add.addEventListener("click",(evt)=>{
    const qtde=txt_qtde.value
    for(let i=0; i<qtde;i++){
        bolas.push(new Bola(bolas,palco))
    }
})
// botão de remover todas as bolinhas dentro de palco. ele chama o método remover da classe.
// seria um problema criar apenas uma função comum de remoção de dados do array?
btn_remover.addEventListener("click",(evt)=>{
    bolas.map((b)=>{
        b.remover()
    })
})
/*
Uma forma mais simples de fazer esse botão remover:

btn_remover.addEventListener("click",()=>{
    bolas.forEach((b)=>{
        clearInterval(b.controle)
        b.eu.remove()
    })

    bolas = []
    numBola = 0
    num_objetos.innerHTML = numBola
})
*/