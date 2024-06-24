function censoredWord (sentence, word){

    let censoredWord = sentence

while (censoredWord.includes(word)) {
    censoredWord = censoredWord.replace(word, '*'.repeat(word.length));
    
}

console.log(censoredWord);

}


censoredWord('Find the hidden word', 'hidden')