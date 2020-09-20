function BoaNoticia (nota){
    if (nota>=7){
        console.log('você foi aprovador com: '+ nota)
    }
}

BoaNoticia(7)
BoaNoticia(6.2)

function seForVerdade (valor){
    if(valor){
        console.log('é verdade' + valor)
    }
}
seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade(0)
seForVerdade('')
seForVerdade(' ')
seForVerdade(-1)
seForVerdade('?')
seForVerdade({})
seForVerdade([2,1])
seForVerdade({})

