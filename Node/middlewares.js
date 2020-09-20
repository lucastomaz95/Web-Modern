//middleware pattern (chain of resposability)
const passo1 = (ctx, next)=>{
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next)=>{
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exc = (ctx, ...middlewares)=>{
    const excPasso = indice =>{
        middlewares && indice < middlewares.length && 
        middlewares[indice](ctx, ()=>{
               excPasso(indice+1)
        })
    }
    excPasso(0)
}

const ctx = {}
exc(ctx, passo1, passo2, passo3) // voce pode trocar os passos dessa maneira
console.log(ctx)