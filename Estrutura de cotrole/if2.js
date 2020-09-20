function teste(num){
    if (num > 7) // if sem chave só executa a primeira linha
        console.log(num)
    
        console.log('Final') // não esta dentro do if
}

teste(6)
teste(8)

function teste2(num){
    if(num > 7)
    ;           //  atentar com ponto e virgula, nesse caso ele nao ta pegando nenhuma logica dentro do if
    console.log(num)
}

teste2(6)
teste2(8)