const alunos = [
    {nome:'Joao', nota: 7.3, bolsista: false},
    {nome:'Maria', nota: 9.2, bolsista: true},
    {nome:'Pedro', nota: 9.8, bolsista: false},
    {nome:'Ana', nota: 8.7, bolsista: false}
]

//Todos alunos é bolsistas
const TodosBolsistas = (resultado, bolsistas) => resultado && bolsistas
const resultado = alunos.map(a=> a.bolsista).reduce(TodosBolsistas)

console.log(resultado)

//algum aluno é bolsista 
const AlgumBolsista = (resultado,bolsistas)=> resultado || bolsistas
const resultado2 = alunos.map(a=> a.bolsista).reduce(AlgumBolsista)
console.log(resultado2)