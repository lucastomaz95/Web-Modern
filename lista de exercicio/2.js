function triangulo(lado1,lado2,lado3){
    if(lado1==lado2 && lado2==lado3){
        console.log('Triangulo Equilatero')
    }else if(lado1==lado2 || lado2==lado3){
    console.log('Triangulo Isoceles')
    }else
    {
        console.log('Triangulo Escaleno')
    }
}

triangulo(1,1,2)
triangulo(1,1,1)
triangulo(1,2,3)



