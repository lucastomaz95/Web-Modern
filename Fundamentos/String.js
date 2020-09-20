const escola = "particul4r"

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3)) // pegar o chacater dentro da string
console.log(escola.indexOf("4")) // ver onde esta o numero 4 na constante

console.log(escola.substring(1))// a partir do indice 1 ele pega tudo
console.log(escola.substring(0,3)) // vai pegar entre o 0 e 3 a constante, não inclui o indicice 3
console.log("escola ".concat(escola).concat("!"))// concatenar pode ser usado o sinal de +
console.log(escola.replace(4, "a"))

console.log("Pedro,Joao,Neymar".split(",")) // fazer string e pegar através "," no caso
