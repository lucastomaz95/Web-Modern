 function Tratarerro(erro){
    //throw new Error ('...') // novo erro que vai dar quando nao tiver no de acordo com a função
    //throw 10
    //throw 'erro'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
 }
 
 function ImprimirNomeGritando(obj){
     try{
        console.log(obj.name.toUpperCase() + '!!!')
     }catch (e){
         Tratarerro(e)
     } 
     finally {
        console.log('final') // sempre chama idependente se tem erro ou nao
     }
    }
 

 const obj = {nome: 'Roberto'}
 ImprimirNomeGritando(obj)