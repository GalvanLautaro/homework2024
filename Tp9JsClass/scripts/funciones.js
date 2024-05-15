class CAutores {
    constructor(nombre, apellido, nacionalidad, mejorObra, anioPublicacion, edadPublicacion) {
        this.nombre = nombre
        this.apellido = apellido
        this.nacionalidad = nacionalidad
        this.mejorObra = mejorObra
        this.anioPublicacion = anioPublicacion
        this.edadPublicacion = edadPublicacion
    }      
}

// Listo en un vector los autores de nacionalidad argentina
function listarAutoresArgentinos(autores) {
    // Si la nacionalidad del objeto es igual a "Argentino" se lo adiciona al vector autoresArgentinos
    document.write("<table border=3><caption>Lista autores argentinos</caption><thead><tr><th>Nombre</th><th>Apellido</th></tr></thead><tbody>")

    for(let elemento of autores) {
        if(elemento.nacionalidad == "Argentino") {
            document.write("<tr><td>" + elemento.nombre + "</td><td>" + elemento.apellido + "</td></tr></tbody>")
        }
    }

    document.write("</table><br><br>")
}

// Listo en un vector los autores que hayan publicado entre 1960 a 1980
function listarAutoresPorFecha(autores) {
    document.write("<table border=3><caption>Lista autores que publicaron entre los 60s y 80s</caption><thead><tr><th>Nombre</th><th>Apellido</th></tr></thead><tbody>")

    for(let elemento of autores) {
        if(elemento.anioPublicacion > 1959 && elemento.anioPublicacion < 1981) {
            document.write("<tr><td>" + elemento.nombre + "</td><td>" + elemento.apellido + "</td></tr></tbody>")
        }
    }

    document.write("</table><br><br>")
}

// Guardo en la variable promedio el promedio de la edad de todos los autores y luego lo retorno
function mostrarPromedioEdad(autores) {
    let promedio = 0

    for(let elemento of autores) {
        promedio += elemento.edadPublicacion
    }

    return promedio / autores.length
}

// Funcion para mostrar dentro de una tabla a todos los elementos del vector autores
function mostrarAutores(autores) {
    document.write("<br><div><table border=3><caption>Lista autores</caption><thead><tr><th>Nombre</th><th>Apellido</th></tr></thead><tbody>")

    for(let elemento of autores) {
        document.write("<tr><td>" + elemento.nombre + "</td><td>" + elemento.apellido + "</td></tr></tbody>")
    }

    document.write("</table></div><br><br>")
}

// Crear objetos de CAutores
let vecAutores = 
[
    new CAutores("Gabriel", "García Márquez", "Colombiano", "Cien años de soledad", 1967, 40), 
    new CAutores("Julio", "Cortázar", "Argentino", "Rayuela", 1963, 48), 
    new CAutores("Isabel", "Allende", "Chilena", "La casa de los espíritus", 1982, 40), 
    new CAutores("Jorge Luis", "Borges", "Argentino", "Ficciones", 1944, 45), 
    new CAutores("Clarice", "Lispector", "Brasileña", "La hora de la estrella", 1977, 56), 
    new CAutores("Juan", "Rulfo", "Mexicano", "Pedro Páramo", 1955, 38), 
    new CAutores("Carlos", "Fuentes", "Mexicano", "La región más transparente", 1958, 29), 
    new CAutores("Eduardo", "Galeano", "Uruguayo", "Las venas abiertas de América Latina", 1971, 31)
]

listarAutoresArgentinos(vecAutores)
listarAutoresPorFecha(vecAutores)
document.write("<p>El promedio de edad es de: " + mostrarPromedioEdad(vecAutores) + "</p>")
mostrarAutores(vecAutores)