//sem callBack
const notas = ['2.2, 4.5, 8.9, 9.5, 10, 2.2, 4.4, 7.4, 6.4, 8.3, 9.1']

let notasBaixas = []
for(let i in notas) {  //para percorrer no array 
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
    console.log(notasBaixas)

//com callBack
let notasBaixas2 = notas.filter((notas)=> notas<7) // filter, vai filtrar o array através de uma condição 
let notasAltas = notas.filter((notas => notas>=7))

console.log(notasBaixas2)
console.log(notasAltas)
console.log(typeof notas)