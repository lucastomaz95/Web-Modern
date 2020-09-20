const porta = 3003

const express = require ('express')
const app = express ()
const bodyParser = require ('body-parser')
const bancoDeDados = require ('./bancoDeDados.js')
const jsonParser = bodyParser.json()
app.use(bodyParser.urlencoded({extended:true}))

app.get ('/produtos', (req, res, next)=>{
    res.send(bancoDeDados.getProdutos())
 })
app.get('/produtos/:id', (req, res, next)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos',jsonParser,(req,res,next)=>{
    console.log(req.body)
     const produto = bancoDeDados.salvarProduto({
         nome: req.body.nome,
         preco: req.body.preco
     })
    res.send(produto) // JSON para ir para web
})

app.put('/produtos/:id',jsonParser,(req,res,next)=>{
    console.log(req.body)
     const produto = bancoDeDados.salvarProduto({
         id: req.params.id,
         nome: req.body.nome,
         preco: req.body.preco
     })
    res.send(produto) // JSON para ir para web
})
app.delete('/produtos/:id',jsonParser,(req,res,next)=>{
    console.log(req.body)
     const produto = bancoDeDados.excluirProdutos(req.params.id){
     res.send(produto) // JSON para ir para web
})

 app.listen(porta, ()=>{
     console.log(`Servidor executando na porta ${porta}`)
 })