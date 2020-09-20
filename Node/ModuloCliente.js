// chamando outros modulos no Node
const ModuloA = require ('./ModuloA') // "./ é o caminho relativo para chamar outro arquivo"
const ModuloB = require ('./ModuloB')

console.log(ModuloA.ola)
console.log(ModuloA.bemVindo)
console.log(ModuloA.ateLogo)
console.log(ModuloA)

console.log(ModuloB.bomDia)
console.log(ModuloB.boaNoite())
console.log(ModuloB)