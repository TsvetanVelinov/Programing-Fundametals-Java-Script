function oddOccurrence(input) {

    let = resultObject = {};
    let allWords = input.split(` `).map(w => w.toLowerCase());

    for (let word of allWords) {
        if (resultObject[word] === undefined) {
            resultObject[word] = 1;
        } else {
            resultObject[word]++;
        }
    }

    let result = '';

    for (let word of allWords) {
        if (resultObject[word] % 2 === 1) {
            result += `${word} `;
            delete resultObject[word]
        }
    }
    console.log(result);
}


oddOccurrence('Java C# Php PHP Java PhP 3 C#3 1 5 C#')