Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim 
}

const imprimirResultado = function (nota){
    if(nota.entre(9,10)){
        console.log('Quadro de honra')
      }if(nota.entre(7,8.99)){
          console.log('Aprovado')
     }if(nota.entre(0,6.99)){
         console.log('Reprovado')
     } if (nota < 0){
         console.log('Valor incorreto')
     }

}
imprimirResultado(-1)
imprimirResultado(2)
imprimirResultado(8)
imprimirResultado(10)