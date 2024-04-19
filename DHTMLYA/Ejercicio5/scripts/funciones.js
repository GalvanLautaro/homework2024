function sumarUno() {
    let texto = document.getElementById('texto')
    texto.childNodes[0].nodeValue = (parseInt(texto.childNodes[0].nodeValue) + 1)
}