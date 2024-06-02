function negativeOrPositiveNumbers(input) {

    let emptySlot = [];
    
    for (const number of input) {
        if (number < 0) {
            emptySlot.unshift(number)
        } else {
            emptySlot.push(number)
        }
    }
    console.log(emptySlot.join('\n'));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9'])
console.log(`------------------------------------------`);
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])
