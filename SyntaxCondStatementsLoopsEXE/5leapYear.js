function leapYear (years) {
    
    if ((years % 4 === 0 && years % 100 !== 0) || years % 400 === 0) {

        console.log('yes');
    } else {
        console.log(`no`);
    }

}

leapYear(2003)