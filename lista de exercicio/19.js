cardapio = (codico, Qtd)=>{
    switch(codico){
        case 100:
            return console.log(`cachorro quente total: ${(Qtd*3.0).toFixed(2)}`)
        case 200:
            return console.log(`Hambúrguer Simples total: ${(Qtd*4.0).toFixed(2)}`)
        case 300:
            return console.log(`Cheeseburguer total: ${(Qtd*5.5).toFixed(2)}`)
        case 400:
            return console.log(`Bauru total: ${(Qtd*7.5).toFixed(2)}`)
        case 500:
            return console.log(`Refrigerante total: ${(Qtd*3.5).toFixed(2)}`)
        case 600:
            return console.log(`Suco total: ${(Qtd*2.8).toFixed(2)}`)
        default:
            return console.log(`esse item não tem no menu`)                        
    }
}
cardapio(100,3)
cardapio(200,2)
cardapio(300,4)
cardapio(400,3)
cardapio(500,8)
cardapio(600,2)
cardapio(1000,3)