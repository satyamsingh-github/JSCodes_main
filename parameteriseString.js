// your code goes here
function parameteriseString(str){
    
 return   str.toLowerCase().replaceAll(/[^a-zA-Z0-9 ]/g,"").replaceAll(" ","-")  
    
}

console.log(parameteriseString("Robin Singh from USA."))

