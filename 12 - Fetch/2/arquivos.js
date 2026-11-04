const endpoint="https://mgzncq-8080.csb.app/"
fetch(endpoint)
.then(res=>res.text()) 
.then(dados=>{
    console.log(dados)
})

