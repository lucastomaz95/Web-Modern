parOuImpar = (valor) => {
    let string = valor.toString().split(',')
    let filtroPar = string.filter((string) => string % 2 == 0)
    let filtroImpar = string.filter((string) => string % 2 != 0)
    console.log(`pares: ${filtroPar}
impares: ${filtroImpar}`)
}


parOuImpar('2,3,4,5,6,7,8,9,10,11,12,13,14')

