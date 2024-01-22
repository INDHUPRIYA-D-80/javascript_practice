//Functions
//Example 1 => function without argument without return type

function fun1(){
    console.log("Function without argument & return type example")
}
fun1()
//Example 2 => function with argument without return type

function fun2(a,b){
    console.log("Function with argument without return type example")
    for(i=a;i<b;i++)
    {
        if(i%2==0)
        {
            console.log("The number"+i+"is even")
        }
        else
        {
            console.log("The number"+i+"is odd") 
        }
    }
}
fun2(5,10)

//Example 3 => function with argument without return type
function fun3(a,b){
        console.log("Function with argument with return type example")
        if(a%b==0)
            {
                return a
            }
        else
            {
                return b
            }
}
console.log(fun3(10,5))

//Example 4 Function without argument with return type example
function fun4(){
    a=10
    b=5
    console.log("Function without argument with return type example")
    if(a%b==0)
        {
            return a
        }
    else
        {
            return b
        }
}
console.log(fun4())
