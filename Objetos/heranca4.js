function meuObjeto(){}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto.prototype === obj1.__proto__)

meuObjeto.prototype.nome='antonio'
meuObjeto.prototype.falar = function (){
        console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__= meuObjeto.prototype // estou mudando, para ele pegar o prototype da função
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo...
console.log(((new meuObjeto).__proto__ === meuObjeto.prototype))
console.log(meuObjeto.__proto__ === Function.prototype) // ele aponta para um função
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)