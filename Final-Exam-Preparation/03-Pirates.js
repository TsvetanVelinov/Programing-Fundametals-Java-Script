function manageTargets(input) {
    let cities = {};

    // Четем входните данни до командата "Sail"
    while (input[0] !== "Sail") {
        let [city, population, gold] = input.shift().split('||');
        population = Number(population);
        gold = Number(gold);

        if (!cities[city]) {
            cities[city] = { population, gold };
        } else {
            cities[city].population += population;
            cities[city].gold += gold;
        }
    }

    // Пропускаме командата "Sail"
    input.shift();

    // Четем събитията до командата "End"
    while (input[0] !== "End") {
        let [command, town, value1, value2] = input.shift().split('=>');
        value1 = Number(value1);
        value2 = Number(value2);

        switch (command) {
            case 'Plunder':
                let people = value1;
                let gold = value2;

                cities[town].population -= people;
                cities[town].gold -= gold;
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                if (cities[town].population <= 0 || cities[town].gold <= 0) {
                    delete cities[town];
                    console.log(`${town} has been wiped off the map!`);
                }
                break;
            case 'Prosper':
                let addedGold = value1;

                if (addedGold < 0) {
                    console.log("Gold added cannot be a negative number!");
                } else {
                    cities[town].gold += addedGold;
                    console.log(`${addedGold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
                }
                break;
        }
    }

    // Отпечатваме оставащите градове
    let cityNames = Object.keys(cities);

    if (cityNames.length > 0) {
        console.log(`Ahoy, Captain! There are ${cityNames.length} wealthy settlements to go to:`);
        for (let city of cityNames) {
            console.log(`${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}


manageTargets([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]);
console.log(`--------------------------------------`);
manageTargets([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]);