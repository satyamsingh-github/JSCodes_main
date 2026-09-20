// your code goes here
function countFrequency(str){
    
let frequency = {}

    for(let char of str.replaceAll(" ", "")){
        
        if(frequency[char]){
            frequency[char] = frequency[char] + 1
        }
        
        else{
            frequency[char] = 1
        }
    }
   
   return frequency
}

console.log(countFrequency("I have to work more on coding part"))