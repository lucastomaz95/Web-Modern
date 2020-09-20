const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 3000,
    desconto: 0.15
}
//JSON.stringfy = ele passa o objeto par ao formato JSON
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto),err =>{  // no caso ele pega o erro que teve na call back
            console.log(err || 'Arquivo salvo!')
})

//fs.writeFile = ele faz um arquivo novo