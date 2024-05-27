function computerStore(input) {
    let index = 0;
    let totalPriceWithoutTaxes = 0;

    while (index < input.length) {
        let price = input[index];
        index++;

        if (price === 'special' || price === 'regular') {
            break;
        }

        price = Number(price);

        if (price < 0) {
            console.log("Invalid price!");
            continue;
        }

        totalPriceWithoutTaxes += price;
    }

    if (totalPriceWithoutTaxes === 0) {
        console.log("Invalid order!");
        return;
    }

    let taxes = totalPriceWithoutTaxes * 0.20;
    let totalPriceWithTaxes = totalPriceWithoutTaxes + taxes;

    if (input[index - 1] === 'special') { 
        totalPriceWithTaxes *= 0.90;
    }

    console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);
