function words(missingWord, sentence) {

    let arrWord = missingWord.split(', ')
    
    for (const word of arrWord) {
        
        let wordsStars = '*'.repeat(word.length)
        sentence = sentence.replace(wordsStars, word )

    }

    console.log(sentence);

}


words('great, learning',
'softuni is ***** place for ******** new programming languages')