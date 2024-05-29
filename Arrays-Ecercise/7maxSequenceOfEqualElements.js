function maxSequenceOfEqualElements(arr) {

    let sequence = 1;
    let maxSequence = 0;
    let countSequence = 0;


    for (let index = 0; index < arr.length; index++) {
        if (index !== 0) {
            let currentNumber = arr[index];
            let leftNumber = arr[index - 1];

            if (currentNumber === leftNumber) {
                sequence++;

                if (sequence > maxSequence) {
                    maxSequence = sequence;
                    countSequence = currentNumber;
                }
            } else {
                sequence = 1;
            }
        }
    }

    console.log(`${(countSequence + ' ').repeat(maxSequence)}`);

}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])