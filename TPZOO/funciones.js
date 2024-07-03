class CZooAnimal {
    // Defino constructor con los atributos que tendra mi objeto 
    constructor(name, cageNumber, IdTypeAnimal, weight) {
        this.IdAnimal = Math.floor(Math.random() * 1000) + 1;
        this.name = name;
        this.cageNumber = cageNumber;
        this.IdTypeAnimal = IdTypeAnimal;
        this.weight = weight;
      }
}

// Instancio 5 objetos de tipo CZooAnimal con datos ingresados
const animal1 = new CZooAnimal('Ballena', 1, 'acuatico', 100000);
const animal2 = new CZooAnimal('Tigre', 2, 'felino', 235);
const animal3 = new CZooAnimal('Mono', 3, 'terrestre', 110);
const animal4 = new CZooAnimal('Loro', 4, 'volador', 15);
const animal5 = new CZooAnimal('Tortuga', 5, 'terreste', 2);

// Instancio una variable zooAnimals de tipo array que va a contener los 5 objetos que instancie anteriormente
const zooAnimals = [animal1, animal2, animal3, animal4, animal5];

// Creo funcion para listar todo lo que contenga la variable zooAnimals
function mostrarAnimales(zooAnimals) {
	// Creo un bucle forEach para recorrer zooAnimals
	zooAnimals.forEach(animal => {
		console.log(`ID: ${animal.IdAnimal}, name ${animal.name}, cage number: ${animal.cageNumber}, type: ${animal.IdTypeAnimal}, weight: ${animal.weight}`);
	});
}

// Creo funcion para contar los animales que esten en la jaula 5 y pesen  menos de 3kg
function countAnimalsInCage5Under3kg(zooAnimals) {
	// Utilizo la funcion filter, que es para recorrer el array zooAnimals y buscar cuales elementos del mismo cumplen ciertas condiciones
	return zooAnimals.filter(animal => animal.cageNumber == 5 && animal.weight < 3).length;
}

// Creo funcion para contar los animales que sean felinos y esten entre las jaulas 2 y 5
function countFelineAnimalsBetweenCages2And5(animals) {
	return animals.filter(animal => animal.IdTypeAnimal == 'felino' && animal.cageNumber >= 2 && animal.cageNumber <= 5).length;
}

// Creo funcion para listar los nombres de los animales que esten en la jaula 4 y pesen menos de 120kg
function listAnimalNameInCage4Under120(animals) {
	// Uso funcion find para encontrar el primer elemento que cumpla con la condicion que se requiere
	const animal = animals.find(animal => animal.cageNumber == 4 && animal.weight < 120);
	return animal.name;
}

// Muestro en consola todas las funciones definidas
console.log(mostrarAnimales(zooAnimals));
console.log("Cantidad animales en jaula 5 menos 3kg: " + countAnimalsInCage5Under3kg(zooAnimals));
console.log("Cantidad animales felinos entre jaulas 2 y 5: " + countFelineAnimalsBetweenCages2And5(zooAnimals));
console.log("Lista animales en jaula 4 menos de 120kg: " + listAnimalNameInCage4Under120(zooAnimals));


