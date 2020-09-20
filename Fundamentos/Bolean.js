let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo=1 // como é um numero, se quiser ver como boleano tem que força dois não para voltar no estado
console.log(!!isAtivo)

console.log("os Verdadeiros: ")
console.log(!!1)
console.log(!!" ")
console.log(!!-1)
console.log(!!{})
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos: ")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar: ')
console.log(!!('' || null || ' '))
console.log('' || null || "epa")//pega o contexto que é verdadeiro

let nome=""
console.log(nome || "Desconhecido") //pegando o verdadeiro se nao tiver nome retorna desconhecido