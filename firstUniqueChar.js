// your code goes here
function firstUniqueChar(str){

for (let char of str){
    
    if(str.indexOf(char) === str.lastIndexOf(char)){

    return char
    break
    }
}
}

console.log(firstUniqueChar("satyams"))