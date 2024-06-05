function shootForTheWin(input) {

    let targets = input.shift().split(` `).map(Number);
    let count = 0;
    let command = input.shift();


    while (command !== "End") {
        let indexWithTarget = Number(command);

        if (indexWithTarget >= 0 && indexWithTarget < targets.length) {
            for (let i = 0; i < targets.length; i++) {

                let currentTarget = targets[indexWithTarget];

                if (i !== indexWithTarget && targets[i] !== -1) {
                    if (targets[i] > currentTarget) {
                        targets[i] -= currentTarget
                    } else {
                        targets[i] += currentTarget
                    }
                }
            }
            targets[indexWithTarget] = -1
            count++;
        }
        command = input.shift();
    }

console.log(`Shot targets: ${count} -> ${targets.join(` `)}`);
}

// shootForTheWin(["24 50 36 70",
//     "0",
//     "4",
//     "3",
//     "1",
//     "End"])

shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
    
