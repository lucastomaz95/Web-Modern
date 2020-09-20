maxAndMin = (valores)=>{
    StringValor = valores.toString().split(',')
    Menor = Math.min.apply(Math,StringValor)
    Maior = Math.max.apply(Math,StringValor)
    return console.log(`Menor: ${Menor} Maior:${Maior}`)
}

maxAndMin([2,0,1,3,6,5,4,87,8])