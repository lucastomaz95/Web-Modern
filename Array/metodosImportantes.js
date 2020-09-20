const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // tira o ultimo elemento da array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento na ultima posição
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da array
console.log(pilotos)

pilotos.unshift('Hamiltom') // adiciona um elemento na primeira posição do array
console.log(pilotos)

//splice pode adionar e remover elementos

//adicionar
pilotos.splice(2,0,'Botas','Massa') // quando for adionar tem que deixar 0, para ele nao excluir nenhum
console.log(pilotos)

//remover
pilotos.splice(3,1) // tira um elemento do indice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1) // gerou uma nova array pegando do 3 para frente

const algunsPilotos2 = pilotos.slice(1,4) //pega do indice um a 3, o 4 nao entra
console.log(algunsPilotos2)