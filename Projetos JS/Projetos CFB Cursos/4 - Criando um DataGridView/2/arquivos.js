
const configdgv={
    endpoint:"http://127.0.0.1:1880/produtos",
    idDestino:"dgvDados",
}

const dgv=(configdgv)=>{
    const dgvDados=document.getElementById(configdgv.idDestino);
    dgvDados.innerHTML="";
    fetch(configdgv.endpoint)
    .then(res=>res.json())
    .then(res=>{
        console.log(res);
        res.forEach(el=>{
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

            const imgDelete=document.createElement("img");
            imgDelete.setAttribute("class","dgvIcone");
            imgDelete.setAttribute("src","delete.svg");
            imgDelete.addEventListener("click",(evt)=>{
                const id=evt.target.parentNode.parentNode.firstChild.innerHTML;
                const linha=evt.target.parentNode.parentNode;
                const endpoint=`http://127.0.0.1:1880/removeproduto/${id}`;
                fetch(endpoint)
                .then(res=>{
                    console.log(res)
                })
                //console.log(evt.target.parentNode.parentNode.firstChild.innerHTML); ---- forma de encontrar qual elemento você quer deletar
            });
            c5.appendChild(imgDelete);

            const imgExibir=document.createElement("img");
            imgExibir.setAttribute("class","dgvIcone");
            imgExibir.setAttribute("src","exibir.svg");
            c5.appendChild(imgExibir);

            const imgEditar=document.createElement("img");
            imgEditar.setAttribute("class","dgvIcone");
            imgEditar.setAttribute("src","editar.svg");
            c5.appendChild(imgEditar);

            dgvDados.appendChild(dgvLinha);

        });
        // console.log(res);
    })
}

dgv(configdgv);


// os elementos da página só são criados se o fetch funcionar corretamente
/*
<div class="dgvLinha">
                <div class="c1">01</div>
                <div class="c2">Processador</div>
                <div class="c3">Intel</div>
                <div class="c4">i7</div>
                <div class="c5">D E V</div>
            </div>

            <div class="dgvLinha">
                <div class="c1">01</div>
                <div class="c2">Processador</div>
                <div class="c3">Intel</div>
                <div class="c4">i7</div>
                <div class="c5">D E V</div>
            </div>

            <div class="dgvLinha">
                <div class="c1">01</div>
                <div class="c2">Processador</div>
                <div class="c3">Intel</div>
                <div class="c4">i7</div>
                <div class="c5">D E V</div>
            </div>
*/