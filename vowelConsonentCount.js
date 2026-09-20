// your code goes here
function vowelCount(str){

let frequency = {}

for(let char of str){
    if('aeiou'.includes(char)){
    
    if(frequency[char]){
         frequency[char] = frequency[char] +1
    }
    
    else{
         frequency[char] = 1
    }

        
    }
}
   return frequency
}

function consonentCount(str){

let frequency = {}

for(let char of str){
    if(!'aeiou'.includes(char)){
    
    if(frequency[char]){
         frequency[char] = frequency[char] +1
    }
    
    else{
         frequency[char] = 1
    }

        
    }
}
   return frequency
}




console.log(vowelCount("satyam"))
console.log(consonentCount("satyam"))
