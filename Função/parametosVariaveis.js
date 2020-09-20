function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments [i]
    }
    return soma
}

console.log(soma())
console.log(soma(2,3))
console.log(soma(2,4.5,34,2.1))
console.log(soma(2,3,'teste'))
console.log(soma('a', 'b', 'c'))