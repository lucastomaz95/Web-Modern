const contadorA = require ('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instaciaNova')() // por ser uma funcao tem que chamar ela
const contadorD = require('./instaciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor) // tem que usar uma factory para criar uma nova instancia, se nao ele nao atualiza a cashe
