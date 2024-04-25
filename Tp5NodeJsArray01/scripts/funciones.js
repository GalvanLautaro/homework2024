// Funcion para mostrar los valores dentro del array en forma de string
function getSeniales(angulos) {
    // Convierto el array angulos en string y lo almaceno en una variable
    const seniales = angulos.join("_");

    return seniales;
}

// Funcion para determinar a que cuadrante pertenece cada valor dentro del array angulos y retornarlo en forma de string
function normalizarSeniales(angulos) {
    let grupo = "";

    // Condicional para determinar el cuadrante de cada elemento del array
    for(let i of angulos) {
        if(i > 45 && i <= 135) {grupo += "N";}
        if(i > 135 && i <= 225) {grupo += "O";}
        if(i > 225 && i <= 315) {grupo += "S";}
        if((i > 315 && i <= 360) || (i <= 45 && i >= 0)){grupo += "E";}
    }

    return grupo;
}

// Funcion que calcula la cantidad de ciclos completos dentro del string
function cantidadCiclos(grupo) {
    const ciclosCompletos = ["NESO", "OSEN", "ESON", "SENO", "SONE", "ENOS", "ONES", "NOSE"];
    let matches = [];
    let cont = 0;

    // Ciclo para recorrer el string grupo y contabilizar las veces que encuentra los elementos del arrar ciclosCompletos
    for(let elemento = 0; elemento < ciclosCompletos.length; elemento++) {
        matches = grupo.match(new RegExp(ciclosCompletos[elemento], 'g'));
        
        // Verifico si en el array matches hay elementos
        if(matches) {
            cont += matches.length;
        }
    } 

    return cont;
}

// Funcion para calcular el porcentaje de ocurrencias de cada cuadrante
function porcentajeOcurrencias(grupo) {
    const porcentajes = [];
    const total = grupo.length;
    const contN = ((grupo.match(/N/g)).length / total) * 100;
    const contO = ((grupo.match(/O/g)).length / total) * 100;
    const contE = ((grupo.match(/E/g)).length / total) * 100;
    const contS = ((grupo.match(/S/g)).length / total) * 100;

    // Agregro al array porcentajes los porcentajes de cada punto cardinal
    porcentajes.push(contN.toFixed(2), contO.toFixed(2), contE.toFixed(2), contS.toFixed(2));

    return porcentajes;
}

// Funcion principal donde se llama a todas las otras funciones
function mainFunction() {
    const angulos = [100,200,50,330,250,180,190,200,150,90,165,240,20,340];

    const seniales = getSeniales(angulos);
    const grupo = normalizarSeniales(angulos);
    const cantidadCiclosCompletos = cantidadCiclos(grupo);
    const porcentajes = porcentajeOcurrencias(grupo);

    alert("Las seniales ingresadas son: " + seniales);
    alert("El cuadrante al que corresponde cada senial seria: " + grupo);
    alert("Cantidad de ciclos completos: " + cantidadCiclosCompletos);
    alert("Los porcentajes de ocurrencia de cada cuadrante: \nNorte: " + porcentajes[0] + "%\nOeste: " + porcentajes[1] + "%\nEste: " + porcentajes[2] + "%\nSur: " + porcentajes[3] + "%");
}