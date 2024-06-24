function countStringOccurrences(sentence, countWord) {

// let counter = sentence.split(' ')
// .filter(word => word === countWord).length


    let arrSentence = sentence.split(' ');

    let counter = 0;

    for (const word of arrSentence) {
        if (word === countWord) {
            counter++;
        }
    }
    console.log(counter);
}



countStringOccurrences('This is a word and it also is a sentence', 'is')