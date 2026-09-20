// your code goes here
function text_truncate(str1,n,str2){
    
    if(n === undefined){
        
     return str1
    }
    
    
    if(str2 !=undefined) {
        
     return str1.slice(0,n)+ str2
     
    }
         
     return str1.slice(0,n)+ " ..."
    

   
   }
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))



