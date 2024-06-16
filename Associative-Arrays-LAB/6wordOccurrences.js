function printWordOccurrences (wordsInput) {
    
    let words = {};

    for (const word of wordsInput) {
        if(!words[word]){
            words[word] = 0;
        }
        
       words[word]++;
    }

    let sortedWords = Object.entries(words).sort((a, b) => (b[1] - a[1]))

    for (const [key, value] of sortedWords) {
        console.log(`${key} -> ${value} times`);
    }
}

printWordOccurrences(["Here", "is", "the", "first", "sentence",

    "Here", "is", "another", "sentence", "And",
    
    "finally", "the", "third", "sentence"])



    function printWordOccurrences (input) {

        let objectArrWords = {};

        for (const word of input) {

            if(!objectArrWords.hasOwnProperty(word)){
                objectArrWords[word] = 1;
            } else {
                objectArrWords[word] += 1
            }
        }

        let sortedArray = Object.entries(objectArrWords).sort((a,b) => (b[1] - a[1]) )
    
        sortedArray.forEach(w => console.log(`${w[0]} -> ${w[1]} times`))
  
    }

    printWordOccurrences(["Here", "is", "the", "first", "sentence",
    
        "Here", "is", "another", "sentence", "And",
        
        "finally", "the", "third", "sentence"])