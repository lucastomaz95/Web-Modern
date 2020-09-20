const soma = (x,y) => x+y

const ImprimirResultado = (a,b,operacao=soma) => console.log(operacao(a,b))

ImprimirResultado(2,3)
ImprimirResultado(2,4,soma)
ImprimirResultado(2,4,(x,y) => x-y)

const pessoa={
    Nome: ()=> console.log('Lucas')
      }
pessoa.Nome()