function employees (names) {
    
    let employeeList = {};

    names.forEach(person => {
        // console.log(`Name: ${person} -- Personal Number: ${person.length}`);
        employeeList[person] = person.length;
    });

    for (const key in employeeList) {
        console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`);
    }


}



employees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'])