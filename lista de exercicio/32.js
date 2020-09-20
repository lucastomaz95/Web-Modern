mediaAritimetica = (valores)=>{
    let soma=0
    
    for(let i=0; i<valores.length; i++){
        soma += valores[i]
    }
    return console.log(soma/valores.length)
}

mediaAritimetica([2,3,4,5])
