function smallestOfThreeNumbers(num1, num2, num3) {

    // if (num1 < num2 && num1 < num3){
    //     console.log(num1);
    // } else if (num2 < num1 && num2 < num3){
    //     console.log(num2);
    // } else if (num3 < num1 && num3 < num2){
    //     console.log(num3);
    // } else {
    //     console.log(num1 || num2 || num3);
    // }

    return Math.min(num1,num2,num3)

}

console.log(smallestOfThreeNumbers(2, 5, 3))
smallestOfThreeNumbers(2, 2, 2)
smallestOfThreeNumbers(600, 342, 123)