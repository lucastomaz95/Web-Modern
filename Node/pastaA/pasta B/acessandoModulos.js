const ModuloA = require('../../ModuloA') // para sair de uma pasta ../ e colocar o mesmo nome do arquivo
console.log (ModuloA.ola)

const http = require('http') // modulo do node
    http.createServer((req, res)=>{
        res.write('Bom dia')
        res.end()
    }).listen(8080)
