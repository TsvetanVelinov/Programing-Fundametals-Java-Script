function distinctArray(input) {

    let resultArray = [];

    for (let number of input) {
       if (!resultArray.includes(number)) {
         resultArray.push(number)
       }
    }
    
    

    console.log(resultArray.join(' '));

}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])