// your code goes here

function formattedString(padding, value, direction){

const newString = String(value)    
    
if (newString.length >= padding.length){
    
   return newString
}
    
let neededLength = padding.length - newString.length

if (direction === 'l'){
    
    return padding.slice(0, neededLength) + newString
}

return newString + padding.slice(0, neededLength)

}

console.log(formattedString('0000',123,'l'));
console.log(formattedString('00000000',123,''));
