// your code goes here
function reverseFirstCap(str){

let newString = str.split(" ").map(str => str.split("").reverse().join("")).map(str => str.slice(0,-1)+ str.slice(-1).toLowerCase()).join(" ")
   
   return newString
}

console.log(reverseFirstCap("satyam have to work more on coding part"))