const os = require('node:os')

console.log('El espacio libre es de: ' + os.freemem() + ' bytes')
const vec = []
for(let i = 0; i < 1000000; i++) {
    vec.push(i)
}
console.log('El espacio libre luego de crear el vector es de: ' + os.freemem() + ' bytes')

