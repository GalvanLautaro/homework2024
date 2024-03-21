const mod = require('./modulo')
const readline = require('readline');

let frase

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingrese la frase o palabra que desea traducir: ', (frase) => {
    console.log(mod.traducirFrase(frase))
    rl.close()
})
