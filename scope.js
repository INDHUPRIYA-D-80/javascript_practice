//Global Scope
//For Loop
sum = 0 //declared as an global scope
console.log("global scope")
for(var i = 0;i<10;i++)
{
    sum += i
}
console.log(sum)

//While loop
i=0
while(i<10)
{
  sum += i
  i++
}
console.log(sum)
i=0
//do while
do{
    sum += i
    i++
}while(i<10);
console.log(sum)

//Local Scope
console.log("Local scope")
for (var i=0;i<5;i++){
    console.log(i+11)
}
console.log(i)


//Blocks scope
console.log("Block scope")
 var a =10;
 console.log("a:",a)
 {
    console.log("Here a and b are declared using let and c is declared using var")
    let a=5;
    let b=6;
    var c=7;
    console.log("a:",a)
    console.log("b:",b)
    console.log("c:",c)
 }
 console.log("a:",a)
 console.log("c:",c)
 console.log("b:",b)
 