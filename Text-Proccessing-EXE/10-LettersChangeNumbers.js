function lettersChangeNumbers(input) {
    
    function getAlphabetPosition(char) {
        const charCode = char.toLowerCase().charCodeAt(0);
        return charCode - 'a'.charCodeAt(0) + 1;
    }

    
    const sequences = input.trim().split(/\s+/);
    let totalSum = 0;

    sequences.forEach(sequence => {
        const firstLetter = sequence[0];
        const lastLetter = sequence[sequence.length - 1];
        const number = parseInt(sequence.slice(1, -1));

        let result = number;

        
        if (firstLetter === firstLetter.toUpperCase()) {
            result /= getAlphabetPosition(firstLetter);
        } else {
            result *= getAlphabetPosition(firstLetter);
        }

       
        if (lastLetter === lastLetter.toUpperCase()) {
            result -= getAlphabetPosition(lastLetter);
        } else {
            result += getAlphabetPosition(lastLetter);
        }

      
        totalSum += result;
    });

    console.log(totalSum.toFixed(2));
}


lettersChangeNumbers('A12b s17G')



