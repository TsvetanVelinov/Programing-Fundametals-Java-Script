function triplesOfLatinLetters(letters) {

    for (let a = 0; a < letters; a++) {
        for (let b = 0; b < letters; b++) {
            for (let c = 0; c < letters; c++) {
                let text1 = String.fromCharCode(97 + a);
                let text2 = String.fromCharCode(97 + b);
                let text3 = String.fromCharCode(97 + c);

                console.log(`${text1}${text2}${text3}`);
            }
        }
    }
    
}

triplesOfLatinLetters(3)