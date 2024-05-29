function reverseAnArrayOfNumbers(count, array) {
    //create new array
    let result = []; //create empty array

    for (i = 0; i < count; i++){
        result[i] = array[count - 1 - i]
        // result[count - 1 - i] = array[i];
    }
    console.log(result.join(' '));


}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])


function reverseAnArrayOfNumbers(count, array) {
   
    let result = [];

    for(let i = count -1; i >= 0; i--){
        result.push(array[i]);
    }

    console.log(result.join(' ')); 

}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])



function reverseAnArrayOfNumbers(count, array) {
   
    let reversedNumber = [];

    for (let i = 0; i < count; i++) {
       reversedNumber[i] = array[count - 1 - i];
    }
    //print
    let result = '';
    for (let i = 0; i < reversedNumber.length; i++) {
        result += reversedNumber[i];

        if (i < reversedNumber.length - 1){
            result += ' ';
        }
    }

    console.log(result);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])