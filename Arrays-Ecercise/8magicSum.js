function magicSum(arr, watchNum) {


    for (let index = 0; index < arr.length; index++) {
        if (index !== 0) {
            let leftNumber = arr[index - 1];

            for (let j = index; j < arr.length; j++) {
                let currentNumber = arr[j];
                let resultNum = leftNumber + currentNumber;
                if (resultNum === watchNum) {
                    console.log(`${leftNumber} ${currentNumber}`);
                }
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8)