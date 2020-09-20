const ferrari = {
    modelo:'F40',
    valocidade:340
}

const volvo = {
    modelo:'V40',
    velocidade:200
}

console.log(ferrari.__proto__) // dois underline acesso o pai da função
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto (){}
console.log(typeof Object, typeof MeuObjeto)
console.log(typeof Object.prototype, typeof MeuObjeto.prototype)
