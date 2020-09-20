function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve,reject)=>{
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro')
        }else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.9)
    .then(console.log)
    .then(
        v=> consol.log(v),
        err=> console.log(`Erro esp: ${err}`)
    )
    .catch(console.log)
    .then(()=> console.log('Fim'))