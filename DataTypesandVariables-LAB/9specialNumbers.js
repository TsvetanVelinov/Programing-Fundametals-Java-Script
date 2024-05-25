function specialNumbers(num) {
 
    for (let i = 1; i <= num; i++) {
        let numAsString = i.toString();
        let sum = 0; 
        for (let t = 0; t < numAsString.length; t++) {
         let curText = numAsString[t];
         let textAsNumber = Number(curText);
         sum += textAsNumber;
        }

        let isSpecial = (sum === 5 || sum === 7 || sum === 11);

        console.log(`${i} -> ${isSpecial ? 'True' : 'False'}`);

    }
}

specialNumbers(15)



