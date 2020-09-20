class Lancamento {
    constructor (nome='Generico', valor=0){
        this.nome = nome
        this.valor = valor
    }
}

class Financeiro {
    constructor (mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }
    addLancamento(...lancamento){
        lancamento.forEach(l=> this.lancamento.push(l))
        console.log(lancamento)
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamento.forEach(l=> {
            valorConsolidado += l.valor 
        })
        return valorConsolidado
    }
}

const salario = new Lancamento ('Salário', 47000)
const contaLuz = new Lancamento ('luz', 220)

const conta = new Financeiro (6,2018)
conta.addLancamento(salario,contaLuz)
console.log(conta.sumario())