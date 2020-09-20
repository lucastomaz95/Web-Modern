let dobro = function (a){
    return 2*a
}

dobro = (a) => {
    return 2*a
}

dobro = (a) => 2*a // retorno implicito

console.log(dobro(Math.PI))

let hello = function () {
    return 'hello'
}

hello = () => 'Hello'
hello = _ => 'hello' // possui um parametro

console.log(hello())