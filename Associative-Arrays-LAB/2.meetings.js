function meeting (input) {
    
    let scheduleMeetings = {};

    for (const entry of input) {
        let command = entry.split(` `);
        let day = command[0];
        let name = command [1];
        // let [day, name] = entry.split(` `);

        if (scheduleMeetings[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            scheduleMeetings[day] = name;

            console.log(`Scheduled for ${day}`);
        }
    }

    // for(let [day, name] of Object.entries(scheduleMeetings)){
    //  console.log(`${day} -> ${[name]}`);
    //}

    for (const day in scheduleMeetings) {
        console.log(`${day} -> ${scheduleMeetings[day]}`);
    }

}


meeting(['Friday Bob',

    'Saturday Ted',
    
    'Monday Bill',
    
    'Monday John',
    
    'Wednesday George'])