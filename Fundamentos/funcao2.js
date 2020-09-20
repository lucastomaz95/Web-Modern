//armazenando função em variavel
const ImprimirSoma = function (a,b){
    console.log(a+b)
}

ImprimirSoma(2,3)

//função arrow
const Soma = (a,b) => {
    return (a+b)
}
console.log(Soma(2,3))

//retorno implicito

const Subt = (a,b) => (a-b)

console.log(Subt(3,2))