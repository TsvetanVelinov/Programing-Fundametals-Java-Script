function rightPlace(stringOne, char, stringTwo) {

    let newString = '';

    for (let index = 0; index < stringOne.length; index++) {

        if (stringOne[index] === '_') {
            newString += char;
        } else {
            newString += stringOne[index];
        }
    }

    console.log(newString === stringTwo ? `Matched` : 'Not Matched');

    // condition ? if-true : else 

}

rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')