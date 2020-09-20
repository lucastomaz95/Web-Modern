comprimento = (altura1,taxaCrescimento1,altura2,taxaCrescimento2)=>{
        
    if(altura1<altura2 && taxaCrescimento1>taxaCrescimento2){
        
        calcularNovaAltura(altura1,taxaCrescimento1,altura2,taxaCrescimento2)
        //return console.log(`${altura1} e ${altura2} `)
    }else
    if(altura2<altura1 && taxaCrescimento2>taxaCrescimento1){
        calcularNovaAltura(altura1,taxaCrescimento1,altura2,taxaCrescimento2)
    }
    else{
        return console.log('taxa de crescimento desproporcional')
    }
}

comprimento(150,6,170,4)

function calcularNovaAltura (novaAltura1,tax1,novaAltura2,tax2){
    let i = 1
    while(novaAltura1<novaAltura2){
        novaAltura1 += tax1
        novaAltura2 += tax2
        i++ 
        }
while(novaAltura2<novaAltura1){
    novaAltura1 += tax1
    novaAltura2 += tax2
    i++ 
    console.log(`${novaAltura1} e ${novaAltura2}` )
}
    console.log(`falta ${i} anos`)
}