// your code goes here
function rotateString(str, n){

const index = n % str.length


return str.slice(index)+ str.slice(0,index)

}

console.log(rotateString("abcdef",4))

