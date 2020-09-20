const carrinho = [
        '{"nome":"Borracha", "preco": 3.45}',
        '{"nome": "Caderno", "preco": 13.90}',
        '{"nome": "kit de Lapis", "preco": 41.22}',
        '{"nome": "Caneta", "preco": 7.50}'
]

//Retorna array somente com os precos
let values = carrinho.map((value) => {
    
    let values2 = value.toString().split(':')
    return parseFloat(values2[2])
})


console.log(values)