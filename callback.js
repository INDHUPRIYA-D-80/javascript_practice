//Callback
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

//callbacks
//Form Submission Example

function submitForm(buttonClick,db){
   setTimeout(function(){
    console.log(buttonClick)
    db();
   },2000)

}


function database(){
  console.log("Form Submitted Successfully")
}

submitForm("Form Submit button clicked",database)