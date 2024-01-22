//Objects 

//How will you declare objects

//FIRST WAY of Declaring the object


var customerDetails = {
    "Name" : "Indhu",
    "Age" : 19,
    "PhoneNo" : "9965485907"

}
console.log(customerDetails)
customerDetails["id"] = "21ECR080"
console.log(customerDetails)


//Second Way of Declaring the object

var customerDetails = {}
customerDetails["id"] = "21ECR080"
customerDetails["name"] = "Priya"
customerDetails["age"] = "19"
customerDetails["PhoneNo"] = "9942182587"
console.log(customerDetails)


//Third Way of Declaring the object

var kongu = new Object()
kongu["fees"] = 100000
kongu["accomodation"] = "Excellent"
kongu["Food"] = "Pretty Decent"
kongu["hostelCount"] =  10
console.log(kongu)
console.log(kongu.Food)
console.log(kongu["hostelCount"])