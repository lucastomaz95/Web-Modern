const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response =>{
    const funcionarios = response.data
    //const paraObjeto = Json=> JSON.parse(Json)
    const chines = pais => pais.pais == 'China'
    //let menor = (Math.min.apply(Math,(funcionarios.salario)))
           
    const arrayChina = funcionarios.filter(chines)
    const menorSalario = arrayChina.map(s=> s.salario)
    const menor = Math.min.apply(Math,menorSalario)
    const chinesMenor = s => s.salario == menor
    const resultado = funcionarios.filter(chines).filter(chinesMenor)
    
    //const min = Math.min(arrayChina.salario)
    console.log(resultado)
     
    
})