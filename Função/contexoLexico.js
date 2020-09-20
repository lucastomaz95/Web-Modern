const valor = 'Global'

function MinhaFuncao(){
    console.log(valor)
}

function exc(){
    const valor='Local'
    MinhaFuncao()
}

exc()
//a variavel prioriza o local que ela foi posta no programa seu contexto léxico