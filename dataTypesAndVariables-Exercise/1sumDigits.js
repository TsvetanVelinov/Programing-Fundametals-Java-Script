function digits(digits) {

    let digitAsString = digits.toString(); //'543'
    let sum = 0;

    for (let t = 0; t < digitAsString.length; t++) {
        let currentDigit = Number(digitAsString[t]);


        sum += currentDigit
    }

    console.log(sum);

}

digits(543)