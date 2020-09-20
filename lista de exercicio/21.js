convenio = (idade)=>{
    if (idade<10){
    return console.log(`R$: ${100+80}`)
    } else if(idade>=10 && idade<=30){
        return console.log(`R$: ${100+50}`)
    }else if(idade>30 && idade<=60){
        return console.log(`R$: ${100+95}`)
    }else if(idade>60){
        return console.log(`R$: ${100+60}`)
    }else{
        return console.log('idade inválida')
    }
}

convenio(9)
convenio(30)
convenio(22)
convenio(56)
convenio(60)
convenio(75)
convenio('a')