ano = (ano) =>{
    if(ano%400 == 0 || (ano%4 == 0 && ano%100 !=100 )){
    console.log('É ano bissexto') 
}else{
    console.log(`não é bissexto`)
}
}

ano(2020)
ano(2024)
ano(1432)
ano(1540)
ano(1541)
ano(1542)
ano(2019)