function vacation(people, typeOfGroup, days) {

    let totalPrice = 0;

    if (people >= 100 && typeOfGroup === "Business") {
        people -= 10;  
    }

    switch (days) {
        case `Friday`:
            if (typeOfGroup === "Students") {
                totalPrice = people * 8.45;
                if (people >= 30) {
                    totalPrice *= 0.85;
                }
            }
            else if (typeOfGroup === "Business") {
                totalPrice = people * 10.90;
            }
            else if (typeOfGroup === "Regular") {
                totalPrice = people * 15;
                if (people >= 10 && people <=20) {
                    totalPrice *= 0.95;
                }
            } 
            break;
        case `Saturday`:
            if (typeOfGroup === "Students") {
                totalPrice = people * 9.80;
                if (people >= 30) {
                    totalPrice *= 0.85;
                }
            }
            else if (typeOfGroup === "Business") {
                totalPrice = people * 15.60;
            }
            else if (typeOfGroup === "Regular") {
                totalPrice = people * 20;
                if (people >= 10 && people <=20) {
                    totalPrice *= 0.95;
                }
            }
            break;
        case `Sunday`:
            if (typeOfGroup === "Students") {
                totalPrice = people * 10.46;
                if (people >= 30) {
                    totalPrice *= 0.85;
                }
            }
            else if (typeOfGroup === "Business") {
                totalPrice = people * 16;
            }
            else if (typeOfGroup === "Regular") {
                totalPrice = people * 22.50;
                if (people >= 10 && people <=20) {
                    totalPrice *= 0.95;
                }
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

vacation(30, "Students", "Sunday")