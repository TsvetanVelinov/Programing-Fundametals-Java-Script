function furniture (input){

    let items = [];
    let totalPrice = 0;

    let command = input.shift();

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/;

    while (command != 'Purchase') {
        let match = command.match(pattern);

        if(match){
            let { name, price, quantity } = match.groups;

            let furniturePrice = Number(price) * Number (quantity);

            items.push(name)

            totalPrice += furniturePrice;
        }

        command = input.shift()
    }


console.log(`Bought furniture:`);

if(items.length > 0){
console.log(items.join('\n'));
}
console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])
