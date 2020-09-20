let bhascara = (a,b,c)=>{
    let x1
    let x2
    let delta = (b**2)-(4*a*c)
   if(delta<0){
        console.log(`delta negativo: ${delta}`)
    }else{
    x1=(-b + Math.sqrt(delta))/(2*a)
    x2=((-b) - Math.sqrt(delta))/(2*a)
    console.log(`x1: ${x1} e x2: ${x2}`)
    }
}

bhascara(3,6,3)
