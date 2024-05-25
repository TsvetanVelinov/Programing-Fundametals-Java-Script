function amazingNumbers(number) {
    
    let textNumber = number.toString();
    let sum = 0;
    let isAmazing = false;

    for (let i = 0; i < textNumber.length; i++) {
        sum += Number(textNumber[i]);   
    }

    let sumText = sum.toString();

    for (let i = 0; i < sumText.length; i++) {
        let currentSum = sumText[i];
        if(currentSum === '9'){
            isAmazing = true;
            break;
        }
    }
   
    
        console.log(`${number} Amazing? ${isAmazing ? 'True' : 'False'}`);
    

}

amazingNumbers(1233)
amazingNumbers(999)