intervalo = (valor) => {
    stringValor = valor.toString().split(',')
    let intervaloDentro =[]
    let intervaloFora = []
    let qtdDentro=0
    let qtdFora=0
    for(let i in stringValor){
        if(stringValor[i]>=10 && stringValor[i]<=20){
            intervaloDentro.push(stringValor[i])
            qtdDentro++
        }else{
            intervaloFora.push(stringValor[i])
            qtdFora++
        }
    }
    return console.log(`dentro: ${intervaloDentro} Qtd: ${qtdDentro} fora: ${intervaloFora} Qtd:${qtdFora}`)
}
intervalo('22,23,24,10,11,12,20,19,18,17,0,1,2,3,4')