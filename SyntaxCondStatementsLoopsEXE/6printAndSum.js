function printAndSum(start, end) {


    let sum = 0;
    let numbersRow = '';

    for (let i = start; i <= end; i++) {

        sum += i;
        numbersRow += `${i} `;  // i + " ";
    }

    console.log(`${numbersRow}`);
    console.log(`Sum: ${sum}`);
    
}


printAndSum(50, 60)