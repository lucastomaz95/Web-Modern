require('./global')

console.log(minhaApp.saudacao()) // porque é global nao precisa colocar global.minhaApp

minhaApp.nome = 'Eita' // objeto sempre pode ser mudado, a nao ser que use uma função para nao mudar isso como o freeze, no exemplo esta com o metodo freeze por isso nao troca

console.log(minhaApp.nome)