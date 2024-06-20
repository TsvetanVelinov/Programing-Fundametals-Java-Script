function aMinerTask(params) {

    let minerals = {}

    for (let command = 0; command < params.length; command += 2) {

        let mineral = params[command];
        let quantity = Number(params[command + 1])

        if (minerals[mineral]) {
            minerals[mineral] += quantity;
        } else {
            minerals[mineral] = quantity;
        }

     }

    for (let mineral in minerals) {

        console.log(`${mineral} -> ${minerals[mineral]}`);
    }


}


aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15'])