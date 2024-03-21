function traducirFrase(frase) {
    let resultado = ''
    for(let i = 0; i < frase.length; i++) {
        switch(frase[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                resultado += reemplazarLetra(frase[i])
                break
            default: 
                resultado += frase[i]
                break
        }
    }   

    return resultado
}

function reemplazarLetra(letra) {
    return letra + 'p' + letra
}

module.exports = {
    traducirFrase
}

