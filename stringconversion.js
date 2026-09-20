// your code goes here
function stringConversion(str){
    
    let newString = ""
   for(let i=0;i<str.length; i+=2){
       
       newString = newString + str[i].repeat(Number(str[i+1]))
   }
   
   return newString
}

console.log(stringConversion("a2b3c4d5"))