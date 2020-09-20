const saudacao = 'Opa' // contexto léxico 1

function exc() {
    const saudacao = 'Falaa' // contecto léxico 2 como esta em outro contexto pode ser o mesmo nome
    return saudacao
}

//objetos sao grupos de  animados de chave/valor

const cliente= {
    nome: 'Lucas',
    Idade:25,
    peso: 78,
    endereco: {
        logradouro: 'Rua valparaíso',
        numero:123
    }
}
console.log (saudacao)
console.log(exc())
console.log(cliente.Idade)