function storeProvision(stockInShop, forDelivery) {

    let storedProducts = [];

    for (let i = 0; i < stockInShop.length; i += 2) {
        let command = stockInShop[i];
        let quantity = Number(stockInShop[i + 1]);

        let productObj = { name: command, qty: quantity }

        storedProducts.push(productObj);
    }

    for (let i = 0; i < forDelivery.length; i += 2) {
        let command = forDelivery[i];
        let quantity = Number(forDelivery[i + 1]);

        let productFound = storedProducts.find(p => p.name === command);

        if (productFound) {
            productFound.qty += quantity;
        } else {
            let productObj = { name: command, qty: quantity }
            storedProducts.push(productObj);
        }
    }


    for (let finalSortedObj of storedProducts) {
         console.log(`${finalSortedObj.name} -> ${finalSortedObj.qty}`);
     }

}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14',
    'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70',
        'Bananas', '30'])