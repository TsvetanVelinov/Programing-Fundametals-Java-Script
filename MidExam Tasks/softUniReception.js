function softUniReception(input) {

    let firstWorker = Number(input[0]);
    let secondWorker = Number(input[1]);
    let thirdWorker = Number(input[2]);
    let students = Number(input[3]);
    neededHours = 0;

    let totalStudentsPerHour = firstWorker + secondWorker + thirdWorker;

    while (students > 0) {
        neededHours++;
        students -= totalStudentsPerHour;

        if (neededHours % 4 === 0) {
            neededHours++;
        }

    }

    console.log(`Time needed: ${neededHours}h.`);

}

softUniReception(['5', '6', '4', '20'])