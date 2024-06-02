function tuTut(input) {
    
    let wagons = input[0].split(` `).map(Number);
    let capacity = Number(input[1]);
    
    for (let i = 2; i < input.length; i++) {
        let command = input[i].split(' ');
        if(command[0] === 'Add'){
           wagons.push(Number(command[1]))    
        } else {
            let passengers = Number (command[0]);

            for(let currentWagon = 0; currentWagon <= wagons.length; currentWagon++){
                if (capacity - wagons[currentWagon] >= passengers) {
                    wagons[currentWagon] += passengers;
                    break;
                }
            }
        }
    }

console.log(wagons.join(` `));

}

tuTut(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])