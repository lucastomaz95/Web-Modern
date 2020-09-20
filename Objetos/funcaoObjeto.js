const pessoa = {
    nome:'Ana',
    idade:2,
    peso:13
}

console.log(Object.keys(pessoa)) // so as chaves
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) // trasforma em array

Object.entries(pessoa).forEach(([chave,valor])=>{
    console.log(`${chave} e ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento' ,{
    enumerable: true, // aparecer na lista da pessoa quando chamada
    writable: false, // no caso nao vai poder ser modificada    '
    value: '01/01/1987' // atribuindo o valor dela
})

pessoa.dataNascimento= '02/01/2020' // tentando trocar, nao vai trocar porque writable esta falso
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = {a:1}
const o1 = {b:2}
const o2 = { c:3,a:4}
const obj =  Object.assign(dest,o1,o2) // concatenar os objetos (função nova)
console.log(obj)
