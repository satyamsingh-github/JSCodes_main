// your code goes here
function humanizeNumbers(n){
    
    if(n %10  === 1 ){
        
     return n+"st"
    }
    
    if(n %10  === 2 ){
        
     return n+"nd"
    }
    
    if(n %10  === 3){
        
     return n+"rd"
    }
   
     return n+ "th"
   

}  
console.log(humanizeNumbers(1))
console.log(humanizeNumbers(8));
console.log(humanizeNumbers(301));
console.log(humanizeNumbers(402));