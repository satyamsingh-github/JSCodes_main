let num = 4

for(let i=0; i<num; i++){
    let row = ''
    for(let j=0;j<num-i-1;j++){
        row = row + " "
    }

    for(let j=0;j<=i; j++){

        row = row + "*"
    }



    console.log(row)

}