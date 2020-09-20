const notas = [2.2, 8.4, 9.6, 4.2, 6.4 ]

for(let i in notas){ // in do index
    console.log(i, notas[i])
}
const pessoa = {
    nome:'Lucas',
    Idade: 25,
    sexo: 'masculino'
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}