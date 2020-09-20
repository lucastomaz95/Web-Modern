const peso1 =1.0
const peso2 = Number("2.1")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 6.821
const avaliacao2 = 9.846

const total = avaliacao1 *peso2 +avaliacao2* peso1
const media= total/(peso1+peso2)
console.log (media.toFixed(2))//quantidade de casas decimais que vai mostrar, mas nao troca o valor
console.log(media.toString(2)) // passa para string, se quiser passar para binario colocar o 2 no parenteses 
