console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {   // desse jeito nao vai funcionar
    nome: 'Teste'
}

//console.log(exports)

module.exports = {  // jeito certo de criar um objeto dentro de module exports
    publico: true
}
console.log(exports)