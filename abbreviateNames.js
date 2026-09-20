// your code goes here
function abbreviateNames(input){
    
const newString = input.trim().split(" ")

return newString[0] + " " + newString[1].charAt(0)+"."

}

console.log(abbreviateNames("satyam singh"))
