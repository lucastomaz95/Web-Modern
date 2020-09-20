Contador = (valores)=>{
    StringValor= valores.toString().split(',')
    numeroNegativo = StringValor.filter((StringValor)=> StringValor<0)
    let totalNegativo=0
    for(totalNegativo; totalNegativo<numeroNegativo.length; totalNegativo++);
    return console.log (`Total de números negativos: ${totalNegativo}`)
}

Contador([2,4,-1,-2,-3,-4,-5,6,5,4,-3])