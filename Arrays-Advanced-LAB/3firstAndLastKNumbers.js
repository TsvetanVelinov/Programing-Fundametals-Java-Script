function firstAndLastKNumbers(array) {

    let newArrays = array.shift();

    let firstArray = array.slice(0, newArrays)
    let lastArray = array.slice(array.length - newArrays)



    console.log(firstArray.join(` `));
    console.log(lastArray.join(` `));

}


firstAndLastKNumbers([2, 7, 8, 9])
console.log(`------------------------------------------`);
firstAndLastKNumbers([3, 6, 7, 8, 9])