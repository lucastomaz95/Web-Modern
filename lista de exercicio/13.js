dia = (valor)=>{
    switch (valor){
    case 1:
       return console.log('Fim de semana')
    case 2: case 3: case 4: case 5: case 6:
        return console.log('dia útil')
    case 7:
        return console.log('final de semana')
    default:
        return console.log('dia inválido' )           
}
}

dia(7)
dia(6)
dia(5)
dia(4)
dia(3)
dia(2)
dia(1)
dia('a')