// your code goes here
function reverseKeepLength(str){

let count = 0

let finalString =[]

let newString = str.replaceAll(" ","").split("").reverse().join("")

for (let word of str.split(" ")){
    
    finalString.push(newString.slice(count, count + word.length))
    
    count = count + word.length
}

   return finalString.join(" ")
}

console.log(reverseKeepLength("satyam have to work more on coding part"))