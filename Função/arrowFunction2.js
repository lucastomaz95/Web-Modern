function Pessoa(){
    this.idade=0

    setInterval(() =>{ // como é arrow ele consegue grava o contexto que o this foi gravado
        this.idade++
        console.log(this.idade)
    },1000)
}
    new Pessoa