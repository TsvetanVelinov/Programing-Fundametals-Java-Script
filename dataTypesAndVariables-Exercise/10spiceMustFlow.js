function spiceMustFlow(startingYeld) {

    let totalSpice = 0;
    let days = 0;
    let consumeCrewDaily = 26;


    while (startingYeld >= 100) {
        days++;
        totalSpice += startingYeld - consumeCrewDaily;
        startingYeld -= 10;
    }

    if (totalSpice >= consumeCrewDaily) {
        totalSpice -= consumeCrewDaily
    }

    console.log(days);
    console.log(totalSpice);

}

spiceMustFlow(450)