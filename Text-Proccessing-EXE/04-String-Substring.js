function stringAndSubstring (word, text) {
    
 let sortedWord = text.toLowerCase().split(' ');
    
    if(sortedWord.includes(word)){
        console.log(word);
    } else {
    console.log(`${word} not found!`);
 }

}

stringAndSubstring('javascript',

'JavaScript is the best programming language')