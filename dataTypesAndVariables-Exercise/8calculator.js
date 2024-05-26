function calculator(numOne, operator, numTwo) {


    let result =
        (operator === '+') ? (numOne + numTwo) :
            (operator === `-`) ? (numOne - numTwo) :
                (operator === `/`) ? (numOne / numTwo) :
                    (operator === `*`) ? (numOne * numTwo) :
                        `Invalid operator`;

    if (result !== 'Invalid operator') {
        console.log(result.toFixed(2));
    }

}

calculator(5, '+', 10)




// switch (operator) {
//    case '+':
//        result = num1 + num2;
//       break;
//   case '-':
//       result = num1 - num2;
//       break;
// case '*':
//     result = num1 * num2;
//       break;
//    case '/':
//       result = num1 / num2;
//        break;
//    default:
//        console.log('Invalid operator');
//        return;
// }