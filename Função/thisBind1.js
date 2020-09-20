 const pessoa = {
     saudacao:'Hello',
     falar (){
         console.log(this.saudacao)
     }
 }

 pessoa.falar()
 console.log(pessoa.saudacao)
 const falar = pessoa.falar
 falar() // conflito entre paradigmas: funcional e OO

 const falardepessoa = pessoa.falar.bind(pessoa) // função bind retorna outra função ai nessa função esta pessoa
 falardepessoa() // no caso foi armazenado em falardepessoa