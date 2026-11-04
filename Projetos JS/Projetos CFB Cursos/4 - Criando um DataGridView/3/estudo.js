const configdgv={
    endpoint:"http://127.0.0.1:1880/produtos",
    idDestino:"dgvDados"
}
/*
O objeto configdgv será usado como parâmetro para a função dgv. Suas propriedades, objetos aninhados, são um endpoint com endereço do banco de dados MySQL
e idDestino com o valor "dgvDados" - dgvDados é o id de um elemento html.
*/

// A função dgv funciona da seguinte forma: cria os elementos html da página - organizando eles em forma de tabela, acessa o banco de dados através de um fetch -
// e coloca esses dados de forma organizada na tela de acordo com a linha e coluna que esses dados fazem parte - e possui 3 botões, cada um com uma funcionalidade
// diferente.


const dgv=(configdgv)=>{
    const dgvDados=document.getElementById(configdgv.idDestino); // acessa o elemento HTML dgvDados
    dgvDados.innerHTML=""; // apaga qualquer propriedade que possa haver no elemento, nesse caso são textos, depois é adicionado propriedades nos códigos seguintes
    fetch(configdgv.endpoint) // acessa o banco de dados
    .then(res=>res.json()) // recebe os dados e transforma eles em obejeto JavaScript
    .then(res=>{
        console.log(res); // mostra no console o valor de res
        res.forEach(el=>{ // pecorre todos os valorers de res, cria elementos html, associa cada dados ao seu respectivo elemento
            const dgvLinha=document.createElement("div");
            dgvLinha.setAttribute("class","dgvLinha");

            const c1=document.createElement("div");
            c1.setAttribute("class","coluna c1");
            c1.innerHTML=el.n_id_produto;
            dgvLinha.appendChild(c1);

            const c2=document.createElement("div");
            c2.setAttribute("class","coluna c2");
            c2.innerHTML=el.s_nome_produto;
            dgvLinha.appendChild(c2);

            const c3=document.createElement("div");
            c3.setAttribute("class","coluna c3");
            c3.innerHTML=el.s_marca_produto;
            dgvLinha.appendChild(c3);

            const c4=document.createElement("div");
            c4.setAttribute("class","coluna c4");
            c4.innerHTML=el.s_modelo_produto;
            dgvLinha.appendChild(c4);

            const c5=document.createElement("div");
            c5.setAttribute("class","coluna c5");
            c5.innerHTML="D E V";
            dgvLinha.appendChild(c5);

            // imgDelete cria um botão com a função de apagar a linha da tabela
            const imgDelete=document.createElement("img");
            imgDelete.setAttribute("class","dgvIcone");
            imgDelete.setAttribute("src","delete.svg");
            imgDelete.addEventListener("click",(evt)=>{
                // qual a relação desse id com o endpoint?
                const id=evt.target.parentNode.parentNode.firstChild.innerHTML; // associa a posição de um elemento da página à uma const do código
                const linha=evt.target.parentNode.parentNode; // faz a mesma coisa do código
                const endpoint=`http://127.0.0.1:1880/removeproduto/${id}`; // acessa um recurso, nome id
                fetch(endpoint)
                .then(res=>{
                    if(res.status==200){ // se ele encontrou o recurso, nome id, ele apaga a linha
                        linha.remove();
                    };
                })
                //console.log(evt.target.parentNode.parentNode.firstChild.innerHTML); ---- forma de encontrar qual elemento você quer deletar
            });
            c5.appendChild(imgDelete);

            const imgEditar=document.createElement("img");
            imgEditar.setAttribute("class","dgvIcone");
            imgEditar.setAttribute("src","editar.svg");
            imgEditar.addEventListener("click",(evt)=>{
                document.querySelector("#janelaEditar").classList.remove("ocultar");
                const id=evt.target.parentNode.parentNode.firstChild.innerHTML;
                const endpoint=`http://127.0.0.1:1880/produtos/${id}`;
                fetch(endpoint)
                .then(res=>res.json())
                .then(res=>{
                    document.querySelector("#f_ideditar").value=res[0].n_id_produto;
                    document.querySelector("#f_produtoeditar").value=res[0].s_nome_produto;
                    document.querySelector("#f_marcaeditar").value=res[0].s_marca_produto;
                    document.querySelector("#f_modeloeditar").value=res[0].s_modelo_produto;
                })
            });
            c5.appendChild(imgEditar);

            // essa função faz um get no banco de dados e adiciona os valores obtidos - do banco de dados - nos inputs que estão presentes no elemento ".janelaView"
            const imgExibir=document.createElement("img");
            imgExibir.setAttribute("class","dgvIcone");
            imgExibir.setAttribute("src","exibir.svg");
            imgExibir.addEventListener("click",(evt)=>{
                document.querySelector(".janelaView").classList.remove("ocultar");
                const id=evt.target.parentNode.parentNode.firstChild.innerHTML;
                const endpoint=`http://127.0.0.1:1880/produtos/${id}`;
                fetch(endpoint)
                .then(res=>res.json())
                .then(res=>{
                    document.querySelector("#f_id").value=res[0].n_id_produto;
                    document.querySelector("#f_produto").value=res[0].s_nome_produto;
                    document.querySelector("#f_marca").value=res[0].s_marca_produto;
                    document.querySelector("#f_modelo").value=res[0].s_modelo_produto;
                })
            });
            c5.appendChild(imgExibir);

            dgvDados.appendChild(dgvLinha);

        });
        // console.log(res);
    })
}

dgv(configdgv);

const botaoOK = document.querySelector("#btn_ok").addEventListener("click",(evt)=>{
    document.querySelector(".janelaView").classList.add("ocultar");
});


// esse botão altera os dados do banco de dados através de um post
const btn_gravar=document.querySelector("#btn_gravar").addEventListener("click",(evt)=>{
    //nesse espaço ele associa o valor de cada input e altera o valores originais que estão presentes no banco de dados.
    const id=document.querySelector("#f_ideditar").value;
    const produto=document.querySelector("#f_produtoeditar").value;
    const marca=document.querySelector("#f_marcaeditar").value;
    const modelo=document.querySelector("#f_modeloeditar").value;
    const endpoint=`http://127.0.0.1:1880/updateproduto/${id}/${produto}/${marca}/${modelo}/`;
    fetch(endpoint)
    .then(res=>{
        if(res.status==200){ // se o response retornar 200, ele fecha a janela. Se não, mostra uma caixa de mensagem "Erro ao atualizar"
        document.querySelector("#janelaEditar").classList.add("ocultar");
        dgv(configdgv);
        }else{
            alert("Erro ao atualizar");
        }
    })
});

// esse botão fecha a janela.
const btn_cancelar=document.querySelector("#btn_cancelar").addEventListener("click",(evt)=>{
    document.querySelector("#janelaEditar").classList.add("ocultar");
});