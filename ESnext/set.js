//nao aceita repeticao/nao indexada
const times = new Set()
times.add('vasco')
times.add('sao paulo').add('Barcelona').add('Real Madrid')
times.add('vasco')

console.log(times) // nao repetiu
console.log(times.size)
console.log(times.has('Barcelona'))
times.delete('vasco')
console.log(times.has('vasco'))

const nomes = ['raquel', 'Lucas', 'Lucas','Amanda']
const nomesSet = new Set (nomes)
console.log(nomesSet)