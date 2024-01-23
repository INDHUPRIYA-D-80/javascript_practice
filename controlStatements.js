
//Looping

//For Loop
sum = 0
for(var i = 0;i<10;i++)
{
    sum += i
}
console.log(sum)

//While loop
i=0
sum = 0
while(i<10)
{
  sum +=i
  i++
}
console.log(sum)

i=0
sum = 0
//do while
do{
    sum+=i
    i++
}
while(i<10);
console.log(sum)


//Checking validity

//Example 1
arr = [10,20,30]    //It is valid
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

//Example 2
arr = [10,20,20.5]  //It is valid  
console.log(arr.length) 
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}


//Example 3
arr = [10,20,true,false]  //It is valid 
console.log(arr.length) 
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

//Example 4
arr = [10,"String","Kongu",20,true]  //It is valid 
console.log(arr.length) 
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

//for in loop 
arr = [10,"String","Kongu",20,true]   
for (const index in arr){
    console.log("The value present in ",index,"is",arr[index])
}

//for of loop
arr = [10,"String","Kongu",20,true]  
for (const value of arr){
    console.log(value)
}

//forEach loop


//To example in depth while teachin ES6

arr = [10,"String","Kongu",20,true]  
arr.forEach(value=>{
    console.log(value)
});



var kongu = new Object()
kongu["fees"] = 100000
kongu["accomodation"] = "Excellent"
kongu["Food"] = "Pretty Decent"
kongu["hostelCount"] =  10
console.log(kongu)


//
//for in =>Output = key 

for(key in kongu){
     console.log(key,kongu[key])
 }
kongu = Object.entries(kongu)
//forEach
kongu.forEach(([key,element])=>{
    console.log(key,":",element)
});

//for of 
for ([key,element] of kongu){
    console.log(key,":",element)
}