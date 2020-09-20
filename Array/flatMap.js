const escola = [{
    nome: 'Turma M1',
    alunos:[{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Ana',
        nota: 9.3
}]
}, { nome:'Turma 2',
    alunos:[{
        nome:'Aline',
        nota: 8.5
    },{
        nome:'Geovani',
        nota: 6.5
    }]
}]

const getNotasDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotasDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([ 8.1, 9.3 ], [ 8.5, 6.5 ]))

Array.prototype.flatmap = function (callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatmap(getNotasDaTurma)
console.log(notas2)

