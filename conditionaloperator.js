//if 
var a=5
if (a!=" "){
    console.log("Value of a is declared")
}

//if..else
var age = 19
if(age>=18)
{
    console.log("Hey..You are eligible to vote!....")
}
else{
    console.log("Sorry...You are not eligible to vote!....")   
}


//if...else if...else and nested if
var time = 12.30
if (time<=12)
{
    console.log("Happy Morning!!Have a pleasant day!...")
}
else if(time<=19)
{
    //nested if...else
    if (time<=15)
    {
        console.log("Good afternoon!!Have a nice day!...")
    }
    else{
        console.log("Good Evening!Nice Meeting You")
    }

}
else 
{
    console.log("Gd night!...")
}


