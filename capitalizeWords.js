// your code goes here
function capitalizeWords(str){
    
let newString = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")  
   return newString
}

console.log(capitalizeWords("satyam works for big4"))

