// your code goes here

function string_chop(str,n){
    
if (n == undefined){
    
    return [str]
}  


let result = []

for(let i= 0; i<=str.length; i+=n) {
    
     result.push(str.slice(i,i+n))
}

return result

}
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
