// your code goes here

function countSubstring(str1, str2){
    
return str1.toLowerCase().split(str2.toLowerCase()).length-1

}
console.log(countSubstring("The quick brown fox jumps over the lazy dog", 'the'));