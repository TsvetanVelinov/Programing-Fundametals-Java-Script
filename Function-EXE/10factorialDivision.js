function factorialDivision(numA, numB) {

    function factorial(number) {
        if(number === 0){
            return 1;
        } else {
            return number * factorial(number - 1);
        }
    }

    let firstNumberFactorial = factorial(numA);
    let secondNumberFactorial = factorial(numB);

    let result = firstNumberFactorial / secondNumberFactorial;

    console.log(result.toFixed(2));


}

factorialDivision(5, 2)