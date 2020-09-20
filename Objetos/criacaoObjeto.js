//usando notação Literal
const Obj1 = {}
console.log(Obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const Obj2 = new Object
console.log(Obj2)

//Função Contrutora
function Produto (nome,preco,desconto){
    this.nome = nome
    this.getPreco=()=>{
        return preco * (1-desconto)
    }
}

const p1= new Produto ('notebook',2999,0.15)
const p2= new Produto ('Geladeira',1000,0,1)
console.log(p1.getPreco(), p2.getPreco())

// Função Factory
function funcionario (nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return ((salarioBase/30) * (30 - faltas)).toFixed(2)
        }
    }
}

const f1 = funcionario('Maria', 11000,2)
const f2 = funcionario('Ana',7000,4)
console.log(f1.getSalario(), f2.getSalario())

//Object.create 
const filho = Object.create(null)
filho.nome = 'Lucas'
console.log(filho)

//Uma função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
 