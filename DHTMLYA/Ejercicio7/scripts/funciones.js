function monstrarContenidoFila() {
    let celda = document.getElementById('elemento1')
    while(celda != null) {
        alert(celda.childNodes[0].nodeValue)
        celda = celda.nextElementSibling
    }
}