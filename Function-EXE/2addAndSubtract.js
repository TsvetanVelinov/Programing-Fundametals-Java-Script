function addAndSubtract(nOne, nTwo, nThree) {

    function sum(nOne, nTwo) {
        return nOne + nTwo;
    }
    let sumResult = sum(nOne, nTwo)

    function subtract(sum, nThree) {
        return sum - nThree;
    }

    return subtract(sumResult, nThree)

}

console.log(addAndSubtract(23, 6, 10))
console.log(addAndSubtract(1, 17, 30))
console.log(addAndSubtract(42, 58, 100))