function operacoes (valor1, valor2) {
    soma = valor1+valor2
    substab = valor1-valor2
    mul = valor1*valor2
    divab = valor1/valor2
    divba = valor2/valor1
    substba = valor2-valor1
}

console.log(operacoes(1,2))
console.log(`soma: ${soma}
             subtracao a e b: ${substab}
             subtracao b e a: ${substba}
             multiplicacao: ${mul}
             divisão a e b: ${divab}
             divisão b e a: ${divba}`)