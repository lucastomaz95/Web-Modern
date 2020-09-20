notas = (numeroDoAluno,nota1,nota2,nota3)=>{
let Novanota1 = nota1*0.4
let Novanota2 = nota2*0.3
let Novanota3 = nota3*0.3
media = Novanota1+Novanota2+Novanota3
        switch(numeroDoAluno){
            case 1:
                return console.log('Joao' + condicao(media))
                break
            case 2:
                return console.log (`Amanda`+ condicao(media))
                break
            case 3:
                return console.log(`Lucas`+ condicao(media))
                break
            case 4:
                return console.log(`Rafael`+ condicao(media))
                break
            case 5:
                return console.log(`Rodrigo`+ condicao(media))
                break
            case 6:
                return console.log(`Alan`+ condicao(media))
                break
            case 7:
                return console.log(`Mariana`+ condicao(media))
                break
            case 8:
                return console.log(`Jack`+ condicao(media))
                break
            case 9:
                return console.log(`Luana`+ condicao(media))
                break
            case 10:
                return console.log(`Michael`+ condicao(media))
                break
        }
}

condicao = (media)=>{
    if(media>=5){
        return(` aprovado com: ${media.toFixed(2)}`)
    }else{
        return(` Reprovado com: ${media.toFixed(2)}`)
    }
}

notas(3,8,8,9)
notas(1,3,2,3)
notas(2,8,7,4)
notas(4,2,5,5)
notas(5,4,5,5)