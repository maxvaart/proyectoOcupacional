
function cambiarImagen (indice){
    var aux = indice+1;
    document.getElementById("estudiante").src = "img/estudiante"+indice+".png";
    document.getElementById("icono"+indice).className = "d-none";
    if (indice < 7){
    document.getElementById("icono"+aux).classList.remove("d-none")
    }
    if (indice == 3 || indice == 6 || indice == 7 ){
        document.getElementById("carta"+indice).classList.remove("bg-primary");
        document.getElementById("carta"+indice).classList.add("bg-dark")
    }
}

function adquirir(indice){
    var margenEstudiante = parseInt(document.getElementById("estudiante").style.marginTop)
    if(margenEstudiante<26){
    document.getElementById("noAdquirido"+indice).classList.remove("faltaAdquirir");
    document.getElementById("estudiante").style.marginTop = margenEstudiante+4+"%";
}
    if(margenEstudiante == 26) {
        document.getElementById("festejo").classList.remove("d-none");
        document.getElementById("metaG").classList.add("d-none");
        document.getElementById("noAdquirido"+indice).classList.remove("faltaAdquirir");
        document.getElementById("estudiante").style.marginTop = margenEstudiante+4+"%";
    }
}