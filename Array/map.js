const nums = [1,2,3,4,5,6]

//for com propósito
let resultado = nums.map(function(e){
    return e*2
})

console.log(resultado)

const soma = e=> e +10
const triplo = e => e*3
const reais = e=> `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma).map(triplo).map(reais)
console.log(resultado)
