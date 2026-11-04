const logn=document.getElementById("long")
const lati=document.getElementById("lati")

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao,erroLocalizacao)
}else{
    console.log("Geolocalização não suportada")
}

function mostrarLocalizacao(pos){
    // console.log(pos)
    lati.innerHTML=`Latitude: ${pos.coords.latitude}`
    logn.innerHTML=`Longitude: ${pos.coords.longitude}`
}

function erroLocalizacao(){
    console.log("erro ao obter a localização")
}