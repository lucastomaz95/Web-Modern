multiplicacao = (parametro,vetor)=>{
    let multiplicacao = vetor
    for(let i in multiplicacao){
        multiplicacao[i] *= parametro
    }
   return console.log(multiplicacao)
}

const vetor = [1,2,3,4,5]
const vetor2 = [1,2,3,4,5]
const parametro = (2)
const parametro2 = (6)
multiplicacao(parametro,vetor)
multiplicacao2(parametro2,vetor2)


function multiplicacao2 (parametro2,vetor2){
    let multiplicacao2 = vetor2
    if(parametro2>5){
    for(let i in multiplicacao2){
        multiplicacao2[i] *= parametro2
    }
}
   return console.log(multiplicacao2)
}
