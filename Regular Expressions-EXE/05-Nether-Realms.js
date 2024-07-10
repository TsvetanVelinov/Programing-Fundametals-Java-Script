function netherRealms(input){
    
    let demons = input.split(/[, ]+/).filter(d => d.trim() !== '');

let demonBook = demons.map(demon => {
    // Изчисляване на здравето
    let health = [...demon]
        .filter(ch => !/[0-9+\-*/.]/.test(ch))
        .reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
    
    // Изчисляване на базовата щета
    let baseDamage = [...demon.matchAll(/([+-]?\d+(\.\d+)?)/g)]
        .reduce((sum, match) => sum + parseFloat(match[0]), 0);
    
    // Модификатори на щетата (* и /)
    let modifiers = [...demon].filter(ch => ch === '*' || ch === '/');
    
    for (let mod of modifiers) {
        if (mod === '*') {
            baseDamage *= 2;
        } else if (mod === '/') {
            baseDamage /= 2;
        }
    }
    
    return { demon, health, baseDamage };
});

// Сортиране на демоните по име
demonBook.sort((a, b) => a.demon.localeCompare(b.demon));

// Отпечатване на резултатите
for (let { demon, health, baseDamage } of demonBook) {
    console.log(`${demon} - ${health} health, ${baseDamage.toFixed(2)} damage`);
}
}

netherRealms(`M3ph-0.5s-0.5t0.0**`);