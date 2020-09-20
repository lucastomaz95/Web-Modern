//spread
const funcionario = { nome: 'Maria', salario: 12.458}
const clone = {ativo:true, ...funcionario}
console.log (clone)

const grupoA = ['joão','Maria','Pedro']
const finalGrupoA = ['Maria', ...grupoA,'Rafaela']
console.log(finalGrupoA)

//rest
function total(...numeros){
    let total = 0
    numeros.forEach(n=> total+=n)
    return total
}
console.log(total(2,3,4,5))