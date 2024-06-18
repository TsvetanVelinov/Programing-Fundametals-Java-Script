function wordTracker(input) {
    
    let searchedWords = input.shift().split(` `)
    let emptyObject = {}

    for (const word of searchedWords) {
        
        emptyObject[word] = 0  //създавам ключ с първоначална стойност 0;
        }

    for (const word of input) {
        if (word in emptyObject)
            emptyObject[word]++;
    }   

    let sortedObject = Object.entries(emptyObject).sort((a, b) => b[1] - a[1])

    for (const [key, value] of sortedObject) {

        console.log(`${key} - ${value}`);
    }
    }

wordTracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'])