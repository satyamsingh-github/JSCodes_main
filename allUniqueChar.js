// your code goes here
function allUniqueChar(str){
let count = 0
for (let char of str){
    
    if(str.indexOf(char) === str.lastIndexOf(char)){
         count++
         console.log (count +" unique: "+ char)
    }
}

return result

}

console.log(allUniqueChar("satyams"))
