let rows = 5

for (let i=1; i<=rows ; i++){

    let row = ""
    count = 2

    for (let j=1; j<= rows-i; j++){
        row = row + " "

    }

    for (let j=1; j<=2*i-1; j++){
        if (count % 5 === 0) {
            row = row + "*";
        } else {
            row = row + count;
        }

        count++
    }

    console.log(row)
}