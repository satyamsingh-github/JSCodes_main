// your code goes here
function capitalizeFirstLetter(str){
    
 return  str.split(" ").map(word => word.slice(0,1).toUpperCase()+word.slice(1)).join( " ")
    
    
}

console.log(capitalizeFirstLetter("robin singh from uSA."))

