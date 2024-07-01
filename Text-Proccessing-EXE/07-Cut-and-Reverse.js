function cutAndReverse(input) {

    let middleIndex = input.length / 2
    
    let firstHalf = input.slice(0, middleIndex).split('').reverse().join('');
    let secondHalf = input.slice(middleIndex,).split('').reverse().join('');

    console.log(firstHalf);
    console.log(secondHalf);

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')