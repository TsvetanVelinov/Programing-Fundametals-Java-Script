function arrayModifier(input) {

    let elementsOfArray = input.shift().split(` `).map(Number);
    
    //     let index = 0;
    // while(index < input.length){

    //     codeTODO

    //     index++;
    // }
    for (let index = 0; index < input.length; index++) {
        let [command, indexOne, indexTwo] = input[index].split(' ');

        switch (command) {
            case `swap`:
                let temporaryIndex = elementsOfArray[indexOne]; //-2
                elementsOfArray[indexOne] = elementsOfArray[indexTwo]; // -2 = 87
                elementsOfArray[indexTwo] = temporaryIndex
                break;
            case `multiply`:
                let multiplyOperation = elementsOfArray[indexOne] * elementsOfArray[indexTwo];
                elementsOfArray[indexOne] = multiplyOperation;
                break;
            case `decrease`:
                elementsOfArray = elementsOfArray.map(x => x -1);
                break;
        }
    }

    console.log(elementsOfArray.join(`, `));

}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])