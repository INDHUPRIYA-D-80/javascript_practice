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


//switch case
let taken = "Papaya";

switch(taken) {
    case "Apple":
        console.log("You have chosen Apple\nLooks like a good choice.\nIt's good for health and is rich in antioxidants and fiber.");
        break;
    case "Banana":
        console.log("You have chosen Banana\nGreat choice!\nIt has high potassium content, aids digestion, and provides energy.");
        break;
    case "Mango":
        console.log("You have chosen Mango\nI thought you had a delicious pick.\nIt is packed with vitamins, boosts immunity, and supports eye health.");
        break;
    case "Papaya":
        console.log("You have chosen Papaya\nEnjoy the tropical taste on your tongue.\nLoaded with enzymes, it promotes digestion and skin health.");
        break;               
    default:
        console.log("Ohhhhh...! It's a bitter thing... Sorry! Invalid Option");
        break;
}


//Ternary Operator
{
let marks = 80;
result = (marks>=35)?"Passed":"Failed";
console.log("Rani!...You have",result,"in the exam")
}
{
let marks = 30;
result1 = (marks>=35)?"Passed":"Failed";
console.log("Meena!...You have",result1,"in the exam")
}