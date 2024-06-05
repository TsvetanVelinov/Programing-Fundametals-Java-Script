function movingTarget(input) {

    let targets = input.shift().split(' ').map(Number);

    let currentLine = input.shift()  // "Shoot 5 10"

    while (currentLine !== "End") {
        let lineArr = currentLine.split(' ');
        let command = lineArr[0];
        let index = Number(lineArr[1]);
        let power = Number(lineArr[2]);

        // let[command, index, power] = currentLine.split(` `);

        switch (command) {
            case `Shoot`:
                if(index >= 0 && index < targets.length)
                targets[index] -= power;
                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
                break;
            case `Add`:
                if (targets[index]) {
                    //targets[index] += power;
                    targets.splice(index, 0, power);
                } else {
                    console.log(`Invalid placement!`);
                }
                break;
            case `Strike`:
               if(index - power >= 0 && index + power < targets.length) {
                    targets.splice(index - power, power * 2 + 1)
                } else {
                    console.log(`Strike missed!`);
                }
                break;

        }

        currentLine = input.shift()
    }

    console.log(targets.join(`|`));

}

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
