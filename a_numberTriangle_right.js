let rows = 5

for (let i=1; i<=rows;i++){

    let row = ""

    for (let k=1; k <= rows - i ; k++){
        row += " "
    }

    for (let j=1; j <= i; j++){
        row = row +j
    }

    console.log(row)
}