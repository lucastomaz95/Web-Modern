function falarDepois(segundo, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase)
        },segundo*1000)
    })
}

falarDepois(3, 'Que legal')
        .then(frase=> frase.concat('!?!'))
        .then(novaFrase => console.log(novaFrase))
        .catch(e=> console.log(e))// como que vai tratar o erro do reject