function condenseArrayToNumber(num) {
    
    let condensed = [];

    while (num.length > 1) {
        for (let i = 0; i < num.length - 1; i++) {
           condensed[i] = num[i] + num[i + 1] 
        }
        num = condensed
        condensed = []
    }

console.log(num.join(' '));

}

condenseArrayToNumber([2,10,3])