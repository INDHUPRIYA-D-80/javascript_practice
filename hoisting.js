//Hoisting
//Variable Hoisting
/*console.log(a) //output => undefined
var a=10

console.log(b) //output => Reference error:Cannot access 'b' before initialization
let b=10*/

//Functional Hoisting 

konguClg(5,10)
function konguClg(a,b){
    for(i=a;i<b;i++)
    {
        if(i%2==0)
        {
            console.log("The number",i,"is even")
        }
        else
        {
            console.log("The number "+i+" is odd") 
        }
    }
}