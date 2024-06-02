function arrayManipulations(input) {

    let array = input[0].split(' ').map(Number);
    let commands = input.slice(1);
    for (let i = 0; i < commands.length; i++) {
        let tokens = commands[i].split(' ');
        //add 1 => ['add', '1']
        let command = tokens[0];
        let parameters = tokens.slice(1).map(Number);
        array = executeCommand(command, parameters, array);
    }

    return array.join(' ');

    function executeCommand(command, parameters, array) {
        switch (command) {
            case 'Add': array.push(parameters[0]);
                return array;
            case 'Remove': array = array.filter(y => y !== parameters[0]);
                return array;
            case 'RemoveAt': array.splice(parameters[0], 1);
                return array;
            case 'Insert': array.splice(parameters[1], 0, parameters[0]);
                return array
        }
    }
}
    console.log(arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']));


