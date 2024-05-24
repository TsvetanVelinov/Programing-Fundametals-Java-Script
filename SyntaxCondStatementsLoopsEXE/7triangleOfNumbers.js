function triangleOfNumbers(numbers) {


    let buffer = "";

    for (let n = 1; n <= numbers; n++) {
        for (let k = 1; k <= n; k++) {
            buffer += `${n} `;
        }
        console.log(buffer);
        buffer = "";
    }

}

triangleOfNumbers(6)