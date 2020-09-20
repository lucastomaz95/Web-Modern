vetorPilha = [1,2,3,4,5]
vetorAdiciona = [6,7,8,9,10]

function adiciona(){
        vetor=[]
        for(let i=0; i<arguments.length; i++){
            vetor = vetor.concat(arguments[i])
        }
        return console.log(vetor)
}

adiciona(vetorPilha,vetorAdiciona)