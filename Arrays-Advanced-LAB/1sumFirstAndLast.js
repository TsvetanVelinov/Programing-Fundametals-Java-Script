function firstAndLastSum(input) {

    let firstElement = Number (input.shift())
    let lastElement = Number (input.pop())
  

    console.log(firstElement + lastElement);
}

firstAndLastSum(['20', '30', '40'])