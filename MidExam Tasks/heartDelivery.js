function heartDelivery(input) {

    let neighborhood = input.shift().split('@')

    let commands = input.shift();
    let total = 0;

    while (commands !== "Love!") {

        let result = commands.split(` `);
        total += Number (result[1]);

        if (total > neighborhood.length - 1) {
            total = 0;
        }

        if (neighborhood[total] === 0) {
            console.log(`Place ${total} already had Valentine's day.`);
        } else {
            neighborhood[total] = neighborhood[total] - 2;
            if(neighborhood[total] === 0){
                console.log(`Place ${total} has Valentine's day.`);
            }
        }

        commands = input.shift()
    }
    
    console.log(`Cupid's last position was ${total}.`);
    let resultArray = [];
    let flagResult = true;

    for (let element of neighborhood) {
        if(element !== 0){
            flagResult = false;
            resultArray.push(element);
        }
    }

    if(flagResult){
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${resultArray.length} places.`);
    }

}

heartDelivery(["2@4@2",

"Jump 2",

"Jump 2",

"Jump 8",

"Jump 3",

"Jump 1",

"Love!"]) 