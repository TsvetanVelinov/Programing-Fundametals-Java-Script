function palindromeIntegers(array) {

    for (let i = 0; i < array.length; i++) {

        let arrayAsString = array[i].toString();
        let reversedArray = arrayAsString.split('').reverse().join('')

        if (arrayAsString === reversedArray) {
            console.log(true);
        } else {
            console.log(false);
        }

    }
}

palindromeIntegers([123, 323, 421, 121])
palindromeIntegers([32, 2, 232, 1010])