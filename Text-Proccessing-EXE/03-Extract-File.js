function extraFile(input) {
    
let sortedInput = input.split('\\').pop()

let lastPartIdx = sortedInput.lastIndexOf('.')


// let name = sortedInput.slice(0, lastPartIdx);
let name = sortedInput.substring(sortedInput, lastPartIdx)
let lastPart = sortedInput.substring(lastPartIdx + 1)
// let lastPart = sortedInput.slice(lastPartIdx + 1);


console.log(`File name: ${name}`);
console.log(`File extension: ${lastPart}`);

}

extraFile ('C:\\Projects\\Data-Structures\\LinkedList.cs')