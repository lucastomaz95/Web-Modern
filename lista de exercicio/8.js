function novaPontucao (stringPontucao){
   let menorPontuacao
   let qtdQuebraDeRecords = 0
   let pontuacao = stringPontucao.split(", ") 
   let menor = (Math.min.apply(Math,pontuacao))
   let maior = pontuacao[0]
   let posicaoDoMenor = pontuacao.indexOf(`${menor}`) + 1
   let notasBaixas = pontuacao.filter((pontuacao)=> pontuacao==menor)

   for (menorPontuacao = 1; menorPontuacao < notasBaixas.length; menorPontuacao++);
   for (let i=1; i<pontuacao.length; i++) 
   {
    if(pontuacao[i] >= maior)
    {
      maior = pontuacao[i]
      qtdQuebraDeRecords++
    }
   }    
   return console.log(`quantidade de baixa pontuação: ${menorPontuacao}, 
quantidade de quebra de recorde: ${qtdQuebraDeRecords},
jogo da pior pontuação: ${posicaoDoMenor}º.`)
 }

novaPontucao(`10, 20, 20, 8, 25, 3, 0, 30, 1`)
