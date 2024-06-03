function searchForANumber(originalArr, commandArray) {

    let numberToTake = commandArray[0];
    let numberToDelete = commandArray[1];

    let modifyArr = originalArr.slice(0, numberToTake);
    modifyArr.splice(0, numberToDelete);

    let specialNumber = commandArray[2];

//     let numberCounter = modifyArr.filter(e => e === specialNumber).length;

//     console.log(`Number ${specialNumber} occurs ${numberCounter} times.`);

// }


let magicNumber = 0;

for (let i = 0; i < modifyArr.length; i++) {
    if (modifyArr[i] === specialNumber) {
        magicNumber++
    }
}

console.log(`Number ${specialNumber} occurs ${magicNumber} times.`)

}




searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])