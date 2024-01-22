//set
//first example

setExample = new Set(["aiadmk","bjp","congress"]);
console.log(setExample)
setExample.add("dmk")
setExample.add("aidmk")
console.log(setExample)

for (const value of setExample){
    console.log(value)
}

for (const index in setExample){
    console.log(index)
}


//Maps

mapEg =new Map([
     ["id","21ECR080"],
     ["name","Tamil"]
])
console.log(mapEg)
for (value of mapEg){
     console.log(value)
}

for (index in mapEg){
    console.log(index) //No output
}

mapEg.set("age","20");
mapEg.set("PhoneNo","9965485907");
console.log(mapEg)

mapEg.delete("PhoneNo");
console.log(mapEg);
console.log(mapEg.has("name1"))

