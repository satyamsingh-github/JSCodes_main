// your code goes here
function insertString(str,str1, n){
    
    if(str1 === undefined){
        
     return str
    }
    
    if(n == undefined){
        return str1 + str
    }
    
    else{
        
        return str.slice(0,n) + str1 + str.slice(n)
    }
   
   }
console.log(insertString('We are doing some exercises.'));
console.log(insertString('We are doing some exercises.','JavaScript '));
console.log(insertString('We are doing some exercises.','JavaScript ',18));

