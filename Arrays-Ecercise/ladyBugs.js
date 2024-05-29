function ladyBugs(input) {

    let field = [];
    let size = Number(input[0]);
    for (let i = 0; i < size; i++) {
        field[i] = 0;
    }

    let indexOfLadyBugs = input[1].split(" ");

    for (let i = 0; i < indexOfLadyBugs.length; i++) {
        let index = indexOfLadyBugs[i];
        if(field[index] !== undefined){
            field[index] = 1;
        }
        
    }

    for (let i = 2; i < input.length; i++) {
        let commands = input[i].split(" ");
        let indexOfLadyBugs = Number(commands[0]);
        let direction = commands[1];
        let flyLength = Number(commands[2]);

        if (indexOfLadyBugs >= field.length || indexOfLadyBugs < 0 || field[indexOfLadyBugs] === 0) {
            continue;
        }

        field[indexOfLadyBugs] = 0;
        let isFly = true;
        if (direction === "right") {
            while (isFly) {
                if (field[indexOfLadyBugs + flyLength] === 0) {
                    field[indexOfLadyBugs + flyLength] = 1;
                    isFly = false;
                } else if (field[indexOfLadyBugs + flyLength] === 1) {
                    flyLength += flyLength;
                } else {
                    isFly = false;
                }
            }
        } else {
            while (isFly) {
                if (field[indexOfLadyBugs - flyLength] === 0) {
                    field[indexOfLadyBugs - flyLength] = 1;
                    isFly = false;
                } else if (field[flyLength] === 1) {
                    flyLength += flyLength;
                } else {
                    isFly = false;
                }
            }
        }
    }

    console.log(field.join(" "));

}

ladyBugs([3, '0 1', '0 right 1', '2 right 1'])
console.log(`-----------------------------`);
ladyBugs([5, '3', '3 left 2', '1 left -2'])



function ladyBugs(input) {
    let size = Number(input[0]);
    let field = [];

    // Инициализиране на полето с 0
    for (let i = 0; i < size; i++) {
        field[i] = 0;
    }

    let indexOfLadyBugs = input[1].split(" ").map(Number);
    for (let i = 0; i < indexOfLadyBugs.length; i++) {
        let index = indexOfLadyBugs[i];
        if (index >= 0 && index < size) {
            field[index] = 1;
        }
    }

    for (let i = 2; i < input.length; i++) {
        let commands = input[i].split(" ");
        let indexOfLadyBugs = Number(commands[0]);
        let direction = commands[1];
        let flyLength = Number(commands[2]);

        // Проверка дали индексът на калинката е валиден и дали на тази позиция има калинка
        if (indexOfLadyBugs < 0 || indexOfLadyBugs >= field.length || field[indexOfLadyBugs] === 0) {
            continue;
        }

        field[indexOfLadyBugs] = 0;
        let newIndex = indexOfLadyBugs;

        if (direction === "right") {
            while (true) {
                newIndex += flyLength;
                // Проверка дали новият индекс е извън границите на полето
                if (newIndex >= field.length) {
                    break;
                }
                // Проверка дали новата позиция е празна
                if (field[newIndex] === 0) {
                    field[newIndex] = 1;
                    break;
                }
            }
        } else { // direction === "left"
            while (true) {
                newIndex -= flyLength;
                // Проверка дали новият индекс е извън границите на полето
                if (newIndex < 0) {
                    break;
                }
                // Проверка дали новата позиция е празна
                if (field[newIndex] === 0) {
                    field[newIndex] = 1;
                    break;
                }
            }
        }
    }

    console.log(field.join(" "));
}


ladyBugs([3, '0 1', '0 right 1', '2 right 1'])
console.log(`-----------------------------`);
ladyBugs([5, '3', '3 left 2', '1 left -2'])