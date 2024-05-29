function mergeArray(arr1, arr2) {

    let thirdArray = [];

    for (let index = 0; index < arr1.length; index++) {

        if (index % 2 === 0) {
            thirdArray[index] = Number(arr1[index]) + Number(arr2[index]);
        } else{
            thirdArray[index] = arr1[index] + arr2[index];

        }
    }
    console.log(thirdArray.join(' - '));
}

mergeArray(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])