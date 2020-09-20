produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'generico'
produto.preco=20

console.log(produto)
delete produto.nome
delete produto['marca do produto']
console.log(produto)

const carro={
    modelo:'Audi',
    valor: 85000,
        proprietario:{
            nome: 'Lucas',
            idade: 25,
                endereco: {
                    rua:'rua ABC',
                    numero: 200
                }
        },
        condutores:[{ // objeto dentro do array
            nome:'Joao',
            idade: '24'
        },{
            nome:'ana',
            idade: 22
        }],
        calcularValor: function (){

        }
    }

   carro.proprietario.endereco.numero=1000
   carro ['proprietario']['endereco']['rua']='valparaiso'
   console.log(carro)
   delete carro.condutores
   delete carro.calcularValor
   console.log(carro)
   console.log(carro.condutores)