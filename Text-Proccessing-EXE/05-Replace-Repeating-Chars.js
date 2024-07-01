function replaceRepeatChairs(input) {

    let emptyString = '';


    for (let alphabet in input) {

        if (input[alphabet] !== input[alphabet - 1]) {

            emptyString += input[alphabet]

        }

    }

    console.log(emptyString);
}


replaceRepeatChairs('aaaaabbbbbcdddeeeedssaa')