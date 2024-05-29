function maxNumber(params) {

    let resultArray = [];
    
    for (let index = 0; index < params.length; index++) {

        let isBigger = true;
        let currentNumber = params[index];  

        for (let j = index + 1; j < params.length; j++) {
            let secondNumber = params[j];

            if(currentNumber <= secondNumber){
                isBigger = false;
            }
        }
        if(isBigger){
            resultArray.push(params[index])
        }
    } 
    console.log(resultArray.join(` `));
}

maxNumber([1, 4, 3, 2])
console.log(`---------------------`);
maxNumber([14, 24, 3, 19, 15, 17])