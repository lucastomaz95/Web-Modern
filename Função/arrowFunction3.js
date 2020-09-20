let comparaComThis = function (param){
    console.log(this===param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis (global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this===param) // como é arrow function nesse caso ele nao escreve no this global
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // arrow tem preferencia

