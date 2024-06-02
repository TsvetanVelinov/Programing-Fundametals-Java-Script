function processOddNumbers(arr) {

    let mutatedArr =
        arr.filter((element, y) => y % 2 !== 0)
        .map(y => y * 2)
        .reverse();

    console.log(mutatedArr.join(' '));

}

processOddNumbers([3, 0, 10, 4, 7, 3])