const pessoa={
nome: 'lucas',
idade: 25,
endereço: {
    logradouro: 'rua exemplo',
    numero:123
}
}

const {nome, idade}= pessoa
console.log(nome, idade)

const {nome: N, idade: i} = pessoa
console.log(N,i)

const { sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const {endereço: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)