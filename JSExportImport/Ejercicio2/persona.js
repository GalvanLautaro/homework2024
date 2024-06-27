export default class Persona{
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Muestro por consola los atributos de la clase persona(nombre y edad)
    mostrarInformacion(){
        console.log(`Nombre: ${this.nombre} \nEdad: ${this.edad}`);
    }
}