const fs = require ('fs')
const caminho = __dirname + '/arquivos.json' // __dirname arquivo do node com diretorio atual

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf8') // utf8 = enconding do arquivo
console.log(conteudo)

//assincrono
fs.readFile(caminho,'UTF-8',(err, conteudo)=>{
    const config = JSON.parse(conteudo) // tem que transforma em um objeto
    console.log(`${config.db.host}: ${config.db.port}`)
})

//utilizando outro metodo para ler um arquivo .json
const config = require('./arquivos.json') // nesse caso ele ja transforma em objeto
console.log(config)

// Ler uma pasta 
fs.readdir(__dirname, (err, arquivos)=>{ // passa um array com esse diretorio
    console.log(('conteudo da pasta...'))
    console.log((arquivos))
})