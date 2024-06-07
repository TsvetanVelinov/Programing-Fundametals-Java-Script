function theLift(input) {

    let people = Number(input.shift());
    let wagons = input.shift().split(' ').map(Number);

    for (let index = 0; index < wagons.length; index++) {
        let currentWagon = wagons[index];

        while (currentWagon !== 4) {
            currentWagon++;
            people--;
            if (people === 0) {
                break;
            }
        }

        wagons[index] = currentWagon;
        if (people === 0) {
            break;
        }
    }

        let isFull = wagons.filter(w => w !== 4)


    if (people === 0 && isFull.length === 0) {
        console.log(wagons.join(' '));
    } else if (isFull.length !== 0) {
        console.log(`The lift has empty spots!`);
        console.log(wagons.join(' '));
    }else {
        console.log(`There isn't enough space! ${people} people in a queue!`)
        console.log(wagons.join(' '));
    }

}

theLift(["15", "0 0 0 0 0"])


theLift(["20", "0 2 0"])