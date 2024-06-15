function createStorage(input) {
    
    let storage = new Map()

    for (const command of input) {
        let [item, quantity] = command.split(` `);
        quantity = Number(quantity)
        if(storage.has(item)){
           quantity += storage.get(item);
        }
        storage.set(item, quantity);   
        }

        for (const [item, quantity] of storage) {
            console.log(`${item} -> ${quantity}`);
        }

    }



createStorage(['tomatoes 10',

    'coffee 5',
    
    'olives 100',
    
    'coffee 40'])