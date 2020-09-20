stringFruta = (fruta) =>{
    switch(fruta){
        case 'maça':
            return console.log('não vendemos essa fruta aqui')
        case 'kiwi':
            return  console.log('estamos com escassez de kiwi')
        case 'melancia': 
        return console.log('aqui esta, sao 3 reais o kilo')
        default:
            return console.log('erro de console')           
    }
}

stringFruta('maça')
stringFruta('kiwi')
stringFruta('melancia')
stringFruta('banana')