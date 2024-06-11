function catalogue (products) {

let catalog = {};

for(let product of products){
    let [name, price] = product.split(` : `);
    price = Number(price);
    let firstLetter = name[0];

    if(!catalog[firstLetter]){

        catalog[firstLetter] = [];
    }

catalog[firstLetter].push({ name, price})
}
    
    let sortedKeys = Object.keys(catalog).sort();

    for (let key of sortedKeys) {
        console.log(key);
        let sortedProducts = catalog[key].sort((a, b) => a.name.localeCompare(b.name));
        for (let product of sortedProducts){
            console.log(` ${product.name}: ${product.price}`);
        }
    }

}


catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);














