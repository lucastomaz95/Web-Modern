console.log(Math.ceil(7.1))

const obj1= {}
obj1.nome= 'bola'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome // ficou publico
    this.exc = function(){
        console.log('exemplo')
    }
}
const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj2.exc()
console.log(typeof Obj)
