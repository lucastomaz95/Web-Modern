//sem retorno
function imprimirSoma (a,b){
    console.log(a+b)
}
 
imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,4,1,2,3,4,5)
imprimirSoma('ale','mao')

//com retorno
function Soma(a,b=0){
    return a+b
}

console.log(Soma(2,3)) // como é retorno precisa imprimir
console.log(Soma(2))
