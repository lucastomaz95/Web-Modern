modelosCarros = (carro)=>{
    switch(carro){
        case 'hatch':
            return console.log('compra efutada com sucesso')
        case 'sedans': case 'motocicletas': case 'caminhonetes':
            return console.log('tem certeza que não prefere este modelo')
        default:
            return console.log('Não trabalhos com esse tipo de automóvel aqui')    
    }
}

modelosCarros('hatch')
modelosCarros('sedans')
modelosCarros('motocicletas')
modelosCarros('caminhonetes')
modelosCarros('toro')