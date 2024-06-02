function smallestTwoNumbers(input) {

    let sortedInScending = input.sort((a, b) => a - b) // (function(a, b){ return a - b;})
    .slice(0,2) // Извличаме първите два елемента от сортирания масив
    .join(' ')

    console.log(sortedInScending);

}

smallestTwoNumbers([30, 15, 50, 5]);
console.log(`-----------------------`);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);