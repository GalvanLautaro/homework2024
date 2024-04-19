function mostrarContenido() {
    let referencia = document.getElementById('div')
    let referencia2 = referencia.lastElementChild
    while(referencia2 != null) {
        alert(referencia2.childNodes[0].nodeValue)
        referencia2 = referencia2.previousElementSibling
    }
}