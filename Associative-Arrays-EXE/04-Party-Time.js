function partyTime(input) {

    let vipGuests = [];
    let regularGuests = [];

    let currentGuest = input.shift();

    while (currentGuest !== 'PARTY') {

        let isVip = !isNaN(currentGuest[0]);

        if(isVip){
            vipGuests.push(currentGuest);
        } else {
            regularGuests.push(currentGuest);
        }
        
        currentGuest = input.shift();
    }

    let allGuests = vipGuests.concat(regularGuests);

    for (const guest of input) {
        allGuests.splice(allGuests.indexOf(guest),1);
    }

    console.log(allGuests.length);
    allGuests.forEach(guest => console.log(guest));

}

partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'])