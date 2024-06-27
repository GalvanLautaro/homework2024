export default class Calculadora {
    // Retorno la multiplicación de ambos numeros que recibe la función
    multiplicar(a, b) {
        return a*b;
    }

    // Retorno la división de ambos números que recibe la función.
    dividir(a, b) {
        // Detecto si se esta dividiendo por cero y envio un error
        if (b === 0) {
            throw new Error("Es imposible dividir por cero");
        }
        return a/b;
    }
}