function theatrePromotions(days, age) {

    price = 0;

    if (age < 0 || age > 122) {
        console.log(`Error!`);  
        return;     
    }

    switch (days) {
        case 'Weekday':
            if (age <= 18) {
                price = 12;
            } else if (age <= 64) {
                price = 18;
            } else if (age <= 122) {
                price = 12;
            }
            break;
        case 'Weekend':
            if (age <= 18) {
                price = 15;
            } else if (age <= 64) {
                price = 20;
            } else if (age <= 122) {
                price = 15;
            }
            break;

        case 'Holiday':
            if (age <= 18) {
                price = 5;
            } else if (age <= 64) {
                price = 12;
            } else if (age <= 122) {
                price = 10;
            }
            break;

        default:
            console.log(`Error!`);
            break;
    }

    console.log(`${price}$`);
}

theatrePromotions('Weekend', 100)
theatrePromotions('Holiday', -12)
theatrePromotions('Holiday', 100)