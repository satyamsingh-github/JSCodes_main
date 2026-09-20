// your code goes here
function hideEmails(input){
    
const newString = input.trim().split("@")

const username = newString[0]
const domain = newString[1]

const final = username.slice(0, newString[0].length/2)+"...@"+ domain

return final

}

console.log(hideEmails("satyamsi@satyamsingh.com"))
