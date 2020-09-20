const tecnologias = new Map ()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', {framework:true})

console.log(tecnologias.react)// nao vai funcionar
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'funcao'],
    [{}, 'Objeto'],
    [123, 'numero']
])

chavesVariadas.forEach((vl,ch)=>{
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // has: para ver se um valor esta dentro de um map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)