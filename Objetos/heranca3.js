const pai = { nome: 'Joao', corCabelo:'preto'}
const filha1 = Object.create(pai)
filha1.nome='ana'
console.log(filha1.corCabelo) // pego a herança do pai

const filha2 = Object.create(pai,{
    nome:{value:'claudia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' // nao vai mudar por causa do writable
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2)) // aquele ele so mostra o que tem no objeto

for(let key in filha2){
    console.log(key)   //aqui ele percorrendo pelo objeto ele vai achar a herança, no caso cor de cabelo
}

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}


