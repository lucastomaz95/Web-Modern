//closure é o escopo criado quando uma função é declarada
// esse escoupo permite a função acessar e manipular variáveis externas à função

//contexto léxico em ação!

const x ='Global'
function fora(){
    const x='Local'
    function dentro(){
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())

//como ele saber onde que ele tava, vai conseguir acessar o Local que foi onde ela foi declarada