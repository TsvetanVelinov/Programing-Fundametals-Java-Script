function convertToObject(input) {

    let person = JSON.parse(input);

    for (let [key, value] of Object.entries(person)) {
        

        console.log(`${key}: ${value}`);
    }

}

convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')