function houseParty(guests) {

     let partyList = [];
     
     for (let command of guests) {
        let tokens = command.split(' ');
        let name = tokens[0];

        if (tokens.includes('not')){
            if(partyList.includes(name)){
            let index = partyList.indexOf(name);
            partyList.splice(index, 1);
        } else {
            console.log(`${name} is not in the list!`);
        }
        } else {
            if(partyList.includes(name)){
                console.log(`${name} is already in the list!`);
            } else {
            partyList.push(name);
            }
        }
     }
    
     //console.log(partyList.join('\n'));
     partyList.forEach(command => console.log(command))

}

houseParty(['Allie is going!',
            'George is going!',
            'John is not going!',
            'George is not going!'])