function CriarProduto(nome, preço){
    return{
        nome,
        preço,
        desconto: 0.1
    }
}

console.log(CriarProduto('Notebook','2500'))