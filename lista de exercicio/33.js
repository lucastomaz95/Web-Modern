vetorInteiro = [2,4,6,7]
vetorDecimal = [1.1,2.2,3.3,4.4]
vetorString = ['2','9','10','11']

function concatenar () {
    let resultado = []
    for(let i=0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return console.log(resultado)
}

concatenar(vetorInteiro,vetorString)