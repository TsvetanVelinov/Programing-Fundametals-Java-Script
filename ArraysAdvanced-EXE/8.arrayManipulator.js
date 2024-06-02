function arrayManipulator(num, commands) {
    for (let command of commands) {
        let tokens = command.split(` `)
        let action = tokens.shift()

        if (action === 'add') {
            let index = Number(tokens.shift());
            let element = Number(tokens.shift());

            num.splice(index, 0, element);

        } else if (action === 'addMany') {
            let index = Number(tokens.shift());

            for (let element of tokens) {
                num.splice(index, 0, Number(element))
                index++;
            }
        } else if (action === `contains`) {
            let element = Number(tokens.shift());

            let index = num.indexOf(element)
            console.log(index);
        } else if (action === 'remove') {
            let index = Number(tokens.shift());
            num.splice(index, 1);
        } else if (action === `shift`) {
            let rotations = Number(tokens.shift());

            for (let curRotation = 0; curRotation < rotations; curRotation++) {
                let firstElement = num.shift();
                num.push(firstElement);
            }
        } else if (action === 'sumPairs') {
            let pairedNums = [];

            for (let i = 0; i < num.length; i += 2) {
                if (i + 1 < num.length) {
                    pairedNums.push(num[i] + num[i + 1]);
                } else {
                    pairedNums.push(num[i]);
                }
            }

            num = pairedNums;

        } else if (action === 'print') {
            console.log(`[ ${num.join(', ')} ]`);
        }
        
    }
  
}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8',
        'contains 1',
        'contains 3',
        'print'])
console.log(`---------------------------`);
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5',
        'contains 15',
        'remove 3',
        'shift 1',
        'print'])