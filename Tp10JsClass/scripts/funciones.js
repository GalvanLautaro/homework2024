class Cjugador {
    constructor(nombre, posicion, edad, estatura, peso, nacionalidad) {
        this.nombre = nombre;
        this.posicion = posicion;
        this.edad = edad;
        this.estatura = estatura;
        this.peso = peso;
        this.nacionalidad = nacionalidad;
    }
}

// Funcion para listar todos los jugadores de nacionalidad Argentina
function listarJugadoresArgentinos(jugadores) {
    let jugadoresArgentinos = []
    
    for(let elemento of jugadores) {
        if(elemento.nacionalidad == "Argentina") {
            jugadoresArgentinos.push(elemento)
        } 
    }
    
    return jugadoresArgentinos
}

// Funcion para listar jugadores cuyo peso sea mayor a 75 kg y menor 85 kg
function listarJugadoresPorPeso(jugadores) {
    let jugadoresPesados = []

    for(let elemento of jugadores) {
        if(parseInt(elemento.peso) > 74 && parseInt(elemento.peso) < 81) {
            jugadoresPesados.push(elemento)
        }
    }

    return jugadoresPesados
}

// Funcion para mostrar el jugador mas alto
function mostrarJugadorMasAlto(jugadores) {
    let jugadorMasAlto = jugadores[0]

    for (let elemento of jugadores) {
        if (parseFloat(elemento.estatura) > parseFloat(jugadorMasAlto.estatura)) {
            jugadorMasAlto = elemento
        }
    }

    return jugadorMasAlto.nombre
}

const jugadores = [
    new Cjugador("Fábio1", "G", 43, "1.88 m", "86 kg", "Brasil"),
    new Cjugador("Marlon4", "D", 28, "1.83 m", "78 kg", "Brasil"),
    new Cjugador("Marcelo12", "D", 35, "1.73 m", "72 kg", "Brasil"),
    new Cjugador("Nino33", "D", 26, "1.88 m", "82 kg", "Brasil"),
    new Cjugador("John Kennedy9", "A", 21, "1.73 m", "71 kg", "Brasil"),
    new Cjugador("Keno11", "A", 34, "1.78 m", "72 kg", "Brasil"),
    new Cjugador("Germán Cano14", "A", 35, "1.78 m", "81 kg", "Argentina")
];

console.log("Jugadores argentinos: ")
console.table(listarJugadoresArgentinos(jugadores))
console.log("Jugadores pesados: ")
console.table(listarJugadoresPorPeso(jugadores))
console.log("Jugador más alto: " + mostrarJugadorMasAlto(jugadores))
