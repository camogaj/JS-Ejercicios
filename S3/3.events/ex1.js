// Añade un botón a tu html con el id btnToClick 
// y en tu javascript añade el evento click 
// que ejecute un console log con la información del 
// evento del click

let btn$$ = "<button id='btnToClick'>clik me</button>"
document.body.innerHTML=btn$$
let clickme = document.getElementById("btnToClick")

clickme.addEventListener("click", function(e) {
    console.log(e)
})


