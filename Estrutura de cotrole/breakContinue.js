const num = [2.3, 4.5, 9.8, 10.2, 9.4, 10.3, 6.4, 7.3, 2.0]

for(let i in num){
    if(i==5){
        break  // causa desvia de fluxo para fora do laço mais perto: "for, while e switch"
    }
    console.log(`${i} = ${num[i]}`)
}

for(let i in num)
{
    if(i==5){
        continue        // desvia so de um numero nao saindo do bloco, no caso pulando um
    }
    console.log(`${i} = ${num[i]}`)
}

//pode se criar um rotulo para chamar o break do rotulo chamado
externo:
 for (a in num){ // externo é o rotulo 
    for (b in num){
        if(a==2 && b==3)
        break externo 
        console.log((`Par ${a} , ${b}`))
    }
}
console.log('Fim')