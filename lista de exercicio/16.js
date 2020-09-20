calculadora = (valor1, valor2, operacao)=>{
    switch(operacao){
        case '+':
            return console.log(`a soma ${valor1} e ${valor2}: ${valor1+valor2}`)
        case '-':
            return console.log(`a subtração ${valor1} e ${valor2}: ${valor1-valor2}`)
        case '/':
            return console.log(`a divisão ${valor1} e ${valor2}: ${(valor1/valor2).toFixed(2)}`)
        case '*':
            return console.log(`a multiplicacão ${valor1} e ${valor2}: ${valor1*valor2}`)
        default:
            return console.log(`operação inválida`)                
    }
}
calculadora(2,3,'+')
calculadora(2,3,'-')
calculadora(2,3,'*')
calculadora(2,3,'/')
calculadora(2,3,'@')