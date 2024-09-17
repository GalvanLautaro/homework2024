// Obtener referencias a los elementos del DOM
const letrasUsadas = document.getElementById("letrasUsadas");
const contenedorPalabra = document.getElementById("contenedorPalabra");
const botonInicio = document.getElementById("botonInicio");
const contadorVidas = document.getElementById("contadorVidas");

// Definir número total de vidas
const totalVidas = 6;

let errores; // Contador de errores
let aciertos; // Contador de aciertos
let letrasUsadas2; // Letras que ya se usaron
let palabraElegida; // La palabra que se debe adivinar

// Función para actualizar el contador de vidas
function actualizarContadorVidas(errores) {
    contadorVidas.innerHTML = `Vidas restantes: ${totalVidas - errores}`;
}

// Función para agregar una letra a la lista de letras usadas
function agregarLetra(letra) {
    const elementoLetra = document.createElement('span');
    elementoLetra.innerHTML = letra.toUpperCase();
    letrasUsadas.appendChild(elementoLetra);
}

// Función para letra incorrecta
function letraIncorrecta(letra) {
    errores++;
    if (errores === totalVidas) {
        finalizarJuego();
    }
    actualizarContadorVidas(errores)
}

// Función para finalizar el juego
function finalizarJuego() {
    // Calcular puntuacion
    const puntuacion = (totalVidas - errores) * 100;

    // Muestrar formulario para guardar puntaje
    const formulario = document.createElement('div');
    formulario.innerHTML = `
        <input type="text" id="nombreJugador" placeholder="Ingrese su nombre">
        <button id="guardarPuntuacion">Guardar Puntuacion</button>
    `;
    document.body.appendChild(formulario);

    document.getElementById('guardarPuntuacion').addEventListener('click', () => {
        const nombre = document.getElementById('nombreJugador').value;
        fetch('http://127.0.0.1:5500/guardar_puntuacion.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `nombre=${nombre}&puntuacion=${puntuacion}&fecha=${new Date().toISOString()}`
        })
        .catch(error => {
            console.error('Error al guardar la puntuación:', error);
        });
        formulario.remove();
        botonInicio.style.display = 'block';
    });
    
    document.removeEventListener('keydown', eventoLetra)
}

// Función para letra correcta
function letraCorrecta(letra) {
    const { children } = contenedorPalabra;
    for (let i = 0; i < children.length; i++) {
        if (children[i].innerHTML === letra) {
            children[i].classList.toggle('hidden');
            aciertos++;
        }
    }

    if (aciertos === palabraElegida.length) {
        finalizarJuego();
    }
}

// Función para procesar la entrada de letras
function entradaLetras(letra) {
    if (palabraElegida.includes(letra)) {
        letraCorrecta(letra);
    } else {
        letraIncorrecta(letra);
    }
    agregarLetra(letra);
    letrasUsadas2.push(letra)
}

// Función para operar con el evento de presionar una tecla
function eventoLetra(event) {
    let nuevaLetra = event.key.toUpperCase();
    if (nuevaLetra.match(/^[a-zñ]$/i) && !letrasUsadas2.includes(nuevaLetra)) {
        entradaLetras(nuevaLetra);
    }
}

// Función para mostrar la palabra que hay que adivinar
function mostrarPalabra() {
    palabraElegida.forEach(letra => {
        const elementoLetra = document.createElement('span');
        elementoLetra.innerHTML = letra.toUpperCase();
        elementoLetra.classList.add('letra');
        elementoLetra.classList.add('hidden');
        contenedorPalabra.appendChild(elementoLetra);
    });
}

// Función para elegir una palabra aleatoria de la API
async function elegirPalabraAleatoria() {
    try {
        const response = await fetch('https://clientes.api.greenborn.com.ar/public-random-word');
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        palabraElegida = data[0].toUpperCase().split('');
    } catch (error) {
        console.error('Error:', error);
    }
}

// Función para iniciar el juego
async function iniciarJuego() {
    letrasUsadas2 = [];
    aciertos = 0;
    errores = 0;
    contenedorPalabra.innerHTML = '';
    letrasUsadas.innerHTML = '';
    botonInicio.style.display = 'none';
    await elegirPalabraAleatoria();
    mostrarPalabra();
    document.addEventListener('keydown', eventoLetra);
}

// Agregar evento al botón de iniciarJuego para comenzar el juego
botonInicio.addEventListener('click', iniciarJuego);