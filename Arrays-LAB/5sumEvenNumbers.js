function sumEvenNumbers(input) {

    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i])
    }
    for (let num of input) {
        if (num % 2 === 0) {
            sum += num;
        }
    }

    console.log(sum);

}

sumEvenNumbers(['1', '2', '3', '4', '5', '6'])


function sumEvenNumbers(input) {

    let evenSum = 0;

    for (let textNumber of input) {

        let number = Number(textNumber);

        if (number % 2 === 0) {

            evenSum += number
        }
    }
    console.log(evenSum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6'])