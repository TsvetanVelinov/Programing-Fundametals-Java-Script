function bombNumbers(sequenceOfNum, specialBombNum) {

    let bombNumber = Number(specialBombNum[0]);
    let rangeExplosion = Number(specialBombNum[1]);

    //let[bombNumber, rangeExplosion] = specialBombNum  - деструктуриране

    while (sequenceOfNum.includes(bombNumber)) {
        let index = sequenceOfNum.indexOf(bombNumber);
        sequenceOfNum.splice(Math.max(0, index - rangeExplosion), rangeExplosion * 2 + 1, 0)
    }
    let sum = 0;

    for (const num of sequenceOfNum) {
        sum += num
    }

    console.log(sum);

}


bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])

