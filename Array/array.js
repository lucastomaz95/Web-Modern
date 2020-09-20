console.log(typeof Array, typeof new Array, typeof [])

let aprovados = ['bia', 'ju','claudia']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] =  'Lucas'
aprovados.push('neiva')
console.log(aprovados.length)

aprovados[9]='ultimo'
console.log(aprovados.length)
console.log(aprovados [8] === undefined)

console.log(aprovados)
aprovados.sort()// reeorganiza a array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia','carlos','janet']
aprovados.splice(1, 2, 'elemento1', 'elemento2') // vai excluir 2 e inserir 2
console.log(aprovados)