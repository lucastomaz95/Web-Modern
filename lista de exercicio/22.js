anuidade = (mes,valor)=>{
    let juros = valor*((1+0.05).toFixed(4)**mes)
    return console.log(`mês: ${mes} juros: ${juros.toFixed(2)} `)   
    
}

anuidade(4,1000)