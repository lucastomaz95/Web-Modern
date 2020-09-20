function Arredondar (notas){
   if(notas>38){
      
    let nota = notas.toString().split('.')
   if(nota[1]>=3 && nota[1]<5){
       nota[1] = 5
   }else if(nota [1]>5){
       nota[1] = 0
       nota[0]++
   }else{
       nota[1] = 0
   }
   //console.log(nota)
   if(nota[0]>=50){
       console.log(`Aluno Aprovado com ${nota}`)
   }else{
       console.log(`Aluno Reprovado com ${nota}`)
   }
    }else{
        console.log(`Alunoi Reprovado com ${notas}`)
    }
}

    Arredondar(36)