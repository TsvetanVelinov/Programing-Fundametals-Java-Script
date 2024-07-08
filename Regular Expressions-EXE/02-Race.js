function race(input) {

    let takenNames = input.shift().split(`, `);
    let command = input.shift()

    let results = {};

    let letterPattern = /[A-Za-z]/g;
    let digitPattern = /\d/g;

    takenNames.forEach(name => results[name] = 0);

    while (command !== 'end of race') {
        let letterMatches = command.match(letterPattern);
        let name = letterMatches.join(``)


        let digitMatches = command.match(digitPattern);
        let sumOfDigit = digitMatches.map(Number).reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        })

        if (name in results) {
            results[name] += sumOfDigit;
        }

        command = input.shift()
    }

    let sortedResults = Object.entries(results).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedResults[0][0]}`);
    console.log(`2nd place: ${sortedResults[1][0]}`);
    console.log(`3rd place: ${sortedResults[2][0]}`);

}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)