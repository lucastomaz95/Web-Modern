
function gerarNumeroEntre(min, max, numerosProibido){
    if(min > max) [max, min] = [min, max]
    return new Promise ((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random () * fator) + min
        if(numerosProibido.includes(aleatorio)){
            reject('Numero repetido!')
        }else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1){
    try{
        const numeros = []
    for(let _ of Array(qtdeNumeros).fill()){
        numeros.push(await gerarNumeroEntre(1, 50, numeros))
    }
    return numeros
}catch(e) {
    if(tentativas > 10){
        throw "não deu certo"
    }else{
        return gerarMegaSena(qtdeNumeros, tentativas + 1)
    }
        }
}


gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)