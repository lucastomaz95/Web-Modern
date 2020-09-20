const alunos = [
    {nome:'Joao', nota:8.3},
    {nome: 'Ana', nota: 7.3}
]

//Imperativo
let total1=0
for(let i=0; i<alunos.length; i++){
    total1 += alunos[i].nota
}
console.log((total1/alunos.length).toFixed(2))

//Declarativa
const getNota = alunos => alunos.nota
const somaMedia = (total,atual)=> (total+atual)/alunos.length
const total2 = alunos.map(getNota).reduce(somaMedia).toFixed(2)
console.log(total2)