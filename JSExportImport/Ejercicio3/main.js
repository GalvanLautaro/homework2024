import Calculadora from "./calculadora.js";

// Instancio un objeto de tipo Calculadora
const calculadora = new Calculadora();

// Muestro en consola las funciones "multiplicar" y "dividir" de la clase Calculadora
console.log("Multiplicación: " + calculadora.multiplicar(2, 2) + "\nDivisión: " + calculadora.dividir(10, 5));
