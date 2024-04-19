function decodificar() {
    let textoPrincipal = document.getElementById("mensaje").value
    let textoDecodificado = ""
    let fragmentoCodificado = ""

    for(let i = 0; i < textoPrincipal.length; i++) {
        if(textoPrincipal[i] == "(") {
            let j = i
            while(j < textoPrincipal.length && textoPrincipal[j] != ")") {
                fragmentoCodificado += textoPrincipal[j]
                j++
            }

            i = j

            for(let k = fragmentoCodificado.length -1 ; k >= 0; k--) {
                if(fragmentoCodificado[k] != "(" && fragmentoCodificado[k] != ")") {
                    textoDecodificado += fragmentoCodificado[k]
                }
            }
            
        } 
    }
    alert(textoDecodificado)
}