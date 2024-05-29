function evenAndOddSubtraction(numbers) {

    let evenSum = 0;
    let oddSum = 0;

    //read only don't modify the array

    for (let textNumber of numbers) {
        let  number = Number(textNumber)
    
        if(number % 2 === 0){
            evenSum += number
        } else if (number % 2 !== 0){
            oddSum += number
        }
    }

    let FinalResult = evenSum - oddSum;

    console.log(FinalResult);
    
}


evenAndOddSubtraction([3,5,7,9])