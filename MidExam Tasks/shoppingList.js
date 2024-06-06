function shoppingList(input) {

    let rawList = input.shift().split(`!`)

    let commands = input.shift();

    while (commands !== "Go Shopping!") {
        let currCommand = commands.split(` `);
        let command = currCommand[0];
        let firstArgument = currCommand[1];
        let secondArgument = currCommand[2];



        switch (command) {
            case 'Urgent': if (!rawList.includes(firstArgument)) {
                rawList.unshift(firstArgument);
            }
                break;
            case 'Unnecessary':
                let itemIndex = rawList.indexOf(firstArgument);
                if (itemIndex > -1) {
                    rawList.splice(itemIndex, 1);
                }
                break;
            case 'Correct':
                let upIndex = rawList.indexOf(firstArgument);
                if (upIndex > -1) {
                    rawList[upIndex] = secondArgument;
                }
                break;
            case 'Rearrange':
                let removeIndex = rawList.indexOf(firstArgument);
                if (removeIndex > -1) {
                let element = rawList[removeIndex];
                rawList.splice(removeIndex, 1);
                rawList.push(element)
                }
                break;
        }

        commands = input.shift();
    }

    console.log(rawList.join(`, `));

}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])

