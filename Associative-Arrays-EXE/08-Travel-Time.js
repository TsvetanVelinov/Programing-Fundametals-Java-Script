function travelTime(input) {
    
    // Обект за съхраняване на данните за страните и градовете
    let destinations = {};

    // Парсиране на входните данни
    for (let entry of input) {
        let [country, town, cost] = entry.split(' > ');
        cost = Number(cost);

        if (!destinations[country]) {
            destinations[country] = {};
        }

        if (!destinations[country][town] || destinations[country][town] > cost) {
            destinations[country][town] = cost;
        }
    }

    // Сортиране на страните по азбучен ред
    let sortedCountries = Object.keys(destinations).sort((a, b) => a.localeCompare(b));

    // Форматиране и извеждане на резултата
    for (let country of sortedCountries) {
        let sortedTowns = Object.keys(destinations[country]).sort((a, b) => destinations[country][a] - destinations[country][b]);
        
        let townsOutput = sortedTowns.map(town => `${town} -> ${destinations[country][town]}`).join(' ');

        console.log(`${country} -> ${townsOutput}`);
    }
}

travelTime([
"Bulgaria > Sofia > 500",

"Bulgaria > Sopot > 800",

"France > Paris > 2000",

"Albania > Tirana > 1000",

"Bulgaria > Sofia > 200"
])
