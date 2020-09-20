const a = 1
const b = 2
const c = 3

const obj1 = {a:a, b:b, c:c} // jeito nas linguagens antigas
const obj2={a, b, c}//se for exatamente igual
console.log(obj1,obj2)

const nomeAttr = 'nota'
const valorAttr = 6.6

const obj3 ={}
obj3[nomeAttr]=valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function (){ // jeito antigo
        //...
    },
    funcao2 (){ // jeito novo
        //.....
    }
}

console.log(obj5)