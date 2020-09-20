const obj = { a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))


const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
       return 'oi pessoal'
    }
}

console.log(pessoa.nome, pessoa.ola())

//class

class animal {}
class cachorro extends animal {
    falar(){
        return 'auau'
    }
}

console.log(new cachorro().falar()) // precisa do new 