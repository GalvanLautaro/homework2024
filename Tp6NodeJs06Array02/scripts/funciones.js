// Recuperar valor del numero semilla del formulario
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const numSemilla = document.getElementById("numero").value;
    let vector = secuencia(numSemilla);
    const longSecuencia = longitudVector(vector);

    alert (vector);
    alert(longSecuencia);
});

// Realizar la secuencia y almacenarla en un vector
function secuencia(numSemilla) {
    let secuencia = [];
    let num = numSemilla;

    secuencia.push(num);
    while(num != 1) {
        num = num % 2 == 0 ? num / 2 : num*3+1;
        secuencia.push(num);
    }

    return secuencia;
}

// Contar la longitud del vector
function longitudVector(secuencia) {
    return secuencia.length;
}
