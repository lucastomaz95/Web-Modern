//criando uma forma literal

function fun1 () {}

//armazenar variavel
const fun2 = function (){}

//armazenar em um array
const array = [function (a,b){ return a+b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar atributo em um objeto
const obj = {}
obj.falar = function () {return 'Hello'}
console.log(obj.falar())

//passar uma função como parametro 
function run(fun){
    fun()
}
run(function (){console.log('executando....')})

//uma função pode retorna/conter uma função 
function Soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}
Soma(2,3) (4)
const teste = Soma(2,3)
teste(4)