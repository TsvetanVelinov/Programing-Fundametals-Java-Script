function sortAnArrayBy2Criteria(input) {

let sortedArray = input.sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log(sortedArray.join('\n'));
    
}

sortAnArrayBy2Criteria(['Isacc',
'Theodor',
'Jack',
'Harrison',
'George'])