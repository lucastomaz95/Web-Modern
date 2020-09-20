// pessosa -> 123(simbolizando a memoria) -> {...}

const pessoa = { nome: 'Lucas'} // aqui ele deixa constante a memoria nao o atributo a ela
pessoa.nome = 'ana'
console.log(pessoa)

//pessoa -> 456 -> {..}
// pessoa = {nome: 'helokity} // esta tentando mudar a memoria entao vai dar erro

Object.freeze(pessoa) // congela o objeto nao consegue mudar mais, nem adionar,nem deletar, objeto vira constante
pessoa.nome = 'Neymar' // ou seja vai imprimir ana ainda, porque esta conjelado 
console.log(pessoa)

//criando Objeto constante de cara
const pessoaConstante = Object.freeze({ nome: 'joao'}) // nao consegue mudar nem a variavel nem o objeto
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)