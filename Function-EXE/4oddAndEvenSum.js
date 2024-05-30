function oddAndEvenSum(num) {

    let sumEven = 0;
    let sumOdd = 0;
    
    let numStr = num.toString();

    for (let i = 0; i < numStr.length; i++) {
        let command = numStr[i];
        let digit = Number(command);

        if(command % 2 === 0){
            sumEven += digit
        } else {
            sumOdd += digit
        }
    }

    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;

}


console.log(oddAndEvenSum(1000435))