function companyUsers(input) {

    let companyEmployees = {};

    for (const command of input) {
        let [company, idEmployee] = command.split(` -> `)

        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(idEmployee)) {
                companyEmployees[company].push(idEmployee);
            }
        } else {
            companyEmployees[company] = [idEmployee];
        }
    }

    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));

    for(let [company, idEmployee] of entries){
        console.log(company);
        for (const iD of idEmployee) {
            console.log(`-- ${iD}`);
        }
    }
}


companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])


