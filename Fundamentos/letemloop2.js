const fun= []
for(let i=0; i<10; i++)
{
    fun.push(function(){
        console.log(i)
    })
}
fun[2] ()
fun[8] ()