function addAndSubtract(arr) {

    let sumOldArray = 0;
    let sumNewArray = 0;


    for (let index = 0; index < arr.length; index++) {
        let currentNumber = Number(arr[index]);

        sumOldArray += currentNumber;

        if (currentNumber % 2 === 0) {

            currentNumber += index;

        } else {
            currentNumber -= index;
        }
        arr[index] = currentNumber;

        sumNewArray += currentNumber;

    }

    console.log(arr);
    console.log(sumOldArray);
    console.log(sumNewArray);
}

addAndSubtract([5, 15, 23, 56, 35])