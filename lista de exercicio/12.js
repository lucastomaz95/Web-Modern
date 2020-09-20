fatorial = (valor)=>{
    let resultado=1
    for(let i=1; i<=valor; i++){
       resultado *= i;
    }
    return console.log(resultado)
}
fatorial(5)