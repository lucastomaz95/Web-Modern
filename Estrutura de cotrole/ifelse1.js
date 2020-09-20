function imprimirNoConsole (nota){
    if(nota>=7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}
imprimirNoConsole(8)
imprimirNoConsole(6)
imprimirNoConsole('Epa') // uma string como é false vai ficar no else
    