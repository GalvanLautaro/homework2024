const PI = 3.14

function sumar(a, b) {
    return a+b
}
function restar(a, b) {
    return a-b
}
function dividir(a, b) {
    if(b == 0) {
        errorMensaje
    } else {
        return a/b
    }
}
function errorMensaje() {
    console.log('No se puede divir un numero por cero')
}

module.exports = {
    sumar,
    restar,
    dividir,
    PI
}