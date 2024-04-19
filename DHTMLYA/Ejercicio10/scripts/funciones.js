function ocultarParrafos() {
    let obj = document.getElementById('div2')
    let lista = obj.getElementsByTagName('p')

    for(let i of lista) {
        i.style.display = 'none'
    }
}