function imitationGame(arr) {

    let copyArr = arr.slice();  //правим копие така на масива

    let message = copyArr.shift();
    let tempMessage = '';

    let currentLine = copyArr.shift();  //'ChangeAll|z|l'
    while (currentLine !== 'Decode') {
        let tokens = currentLine.split(`|`)
        let command = tokens[0];

        switch (command) {
            case `Move`:
                let lettersNumber = Number(tokens[1]);
                let lettersToMove = message.substring(0, lettersNumber);
                tempMessage = message.replace(lettersToMove, '');
                tempMessage += lettersToMove;
                message = tempMessage
                break;

            case `Insert`:
                let index = Number(tokens[1]);
                let value = tokens[2];
                tempMessage = message.split('')
                tempMessage.splice(index, 0, value)
                message = tempMessage.join('')
                break;

            case `ChangeAll`:
                let redundantLetter = tokens[1];
                let newLetter = tokens[2];

                while (message.includes(redundantLetter)) {
                    tempMessage = message.replace(redundantLetter, newLetter)
                    message = tempMessage
                }
                break;

        }
        currentLine = copyArr.shift();
    }

    console.log(`The decrypted message is: ${message}`);
   
}

// imitationGame([
//     'zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode'])
// console.log(`----------------------------------------------------------------`);
imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])