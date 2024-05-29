function arrayRotation(array, rotation) {

    for (let index = 0; index < rotation; index++) {

        let firstKill = array.shift();
        array.push(firstKill);

    }

    console.log(array.join(' '));

}

arrayRotation([51, 47, 32, 61, 21], 2)