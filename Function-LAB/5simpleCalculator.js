function simpleCalculator(digit1, digit2, operator) {

    let multiply = (a, b) => a * b;
    let divide = (a,b) => a / b;
    let add = (a,b) => a + b;
    let subtract = (a,b) => a - b;

    let product = 0;

    switch (operator) {
        case 'multiply': product = multiply(digit1,digit2)

            break;
        case 'divide': product = divide(digit1,digit2)

            break;
        case 'add': product = add(digit1,digit2)

            break;
        case 'subtract': product = subtract(digit1,digit2)

            break;

    }

    console.log(product);

}

simpleCalculator(5, 5, 'multiply')