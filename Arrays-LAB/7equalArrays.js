function equalArrays(arr1, arr2) {

    let areEqual = true;
    let sum = 0;

    for (let num1 = 0; num1 < arr1.length; num1++) {
        arr1[num1] = Number(arr1[num1]);
    }
    for (let num2 = 0; num2 < arr2.length; num2++) {
        arr2[num2] = Number(arr2[num2]);
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }

    if (areEqual) {
        for (let i = 0; i < arr1.length; i++) {
            sum += arr1[i];
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}


equalArrays(['1', '2', '3', '4', '5'],
    ['1', '2', '4', '4', '5'])
equalArrays(['1'], ['10'])
equalArrays(['10','20','30'],
['10','20','30'])