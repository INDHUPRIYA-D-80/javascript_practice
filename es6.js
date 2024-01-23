//ES6-> ECMA Script 6 Standard 
//1.Var,let,const =>refer variable.js

//2.Arrow Function

var fun=() =>{
    console.log("Hello")
}
fun()


//3.Destructing Operator

var array = [10,20,30,40,50]
var[a,b,c,d,e] =  array
console.log(a,b,c,d,e)

//4.Spread Operator 

var array = [10,20,30,40,50]
var arr1 = [...array,60,70]
console.log(arr1)


//promise

function isLocationValid(loc) {
    var v = "Melbourne"
    if (v === loc) {
      return true
    }
    else {
      return false
    }
}
var location=()=> {
  return new Promise( (response, errorMsg) =>{
      setTimeout( ()=> {
        loc = "Melbourne"
        console.log("the location is", loc)
        if (isLocationValid(loc)) {
          return response("Location found")
        }
        else {
          return errorMsg("Location Not Found")
        }
  
      }, 2000)
    });
  }
  
  location()
    .then(
      (response)=> {
        console.log(response)
      }
    )
    .catch(
       (errorMsg) =>{
        console.log(errorMsg)
      }
    )

//Callback-1
function ramuSomu(welcomeMessage,callback){
  setTimeout(function()
  {
    console.log(welcomeMessage)
    callback();
  },2000)

}
function miniAni(){
  console.log("Hi....!,We welcomes you to our college")
}
ramuSomu("Hello Ramu and Somu \n Welcome to Kongu Engineering College",miniAni)

//callback-2


var submitForm=(buttonClick,db)=>{
 setTimeout(()=>{
  console.log(buttonClick)
  db();
 },2000)

}

var database=()=>{
console.log("Form Submitted Successfully")
}

submitForm("Form Submit button clicked",database)

//Async Await


async function asAw() {
  var promise = new Promise(
      (response)=> {
          setTimeout(()=> {
              response("Example of async/await")
          }, 1000);
      });
  console.log(await promise)
}

asAw();
