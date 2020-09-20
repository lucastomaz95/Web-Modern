divisivel = (numero) =>{
    if(numero%3 == 0){
        console.log(`Esse numero é divisivel por 3 ${numero%3 == 0}`)
    }else{
        console.log(`Esse numero não é divisivel por 3 ${numero%3 == 0}`)
    }
}

divisivel(4)