function comprar(trabalho1, trabalho2){
      const comprarSoverte= trabalho1 || trabalho2
      const comprartv50pol= trabalho1 && trabalho2
      const comprartv32pol= trabalho1 != trabalho2
      //const comprartv32pol= !!(trabalho1 ^ trabalho 2)
      const manterSaudavel =! comprarSoverte
      return{comprarSoverte, comprartv32pol,comprartv50pol,manterSaudavel}  // nao precisa de chave e valor para o objeto porque vai ser o mesmo valor 
}

console.log(comprar(true, true))
console.log(comprar(true, false))
console.log(comprar(false, false))
console.log(comprar(false, true))