function sorting (arr) {

    arr = arr.sort((a,b) => a - b);
    let betaArr = [];

    let sortedLength = arr.length ;

    for(let i = 0; i < sortedLength; i++){

        let lastNum = arr.pop()
        betaArr.push(lastNum)

        let firstNum = arr.shift();
        betaArr.push(firstNum)

       
    }

    // while (arr.length > 0) {
    //     let biggestNum = arr.pop();
    //     betaArr.push(biggestNum);

    //     let smallestNum = arr.shift()
    //     betaArr.push(smallestNum)

    // }

    console.log(betaArr.join(` `));
   
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])