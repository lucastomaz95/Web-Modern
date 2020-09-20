function Pessoa(){
    this.idade=0
    
    const self = this
    setInterval(function (){
        /*this.idade++*/self.idade++ // nao aponta para o objeto pessoa porque quem esta disparando a função pe o set interval a cada 1000ms
        /*console.log(this.idade)*/console.log(self.idade)
    }//.bind(this)// para amarrar o this no objeto pessoa usa o bind, linha comentada para mostrar outro jeito
    , 1000) //setinterval tem que receber o intervalo no caso 1000ms
}

new Pessoa // instacia a função

//parte comentada um outro jeito de fazer, até melhor