function string2array(input){
    
return input.split(" ")

}

function extractCharacters(input, n){
    
    return input.slice(0,n)
}

console.log(string2array("satyam is learning javascript"))
console.log(extractCharacters("satyam is learning javascript",4))