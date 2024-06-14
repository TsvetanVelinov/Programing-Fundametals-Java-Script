function printAddressBook (input) {
    
    let addressBook = {};

    for (let entry of input) {
        let [name, address] = entry.split(`:`);
        addressBook[name] = address;
       
    }

    let sorted = Object.entries(addressBook)

    sorted.sort((kvpA,kvpB) => kvpA[0].localeCompare(kvpB[0]));
   for (const entry of sorted) {
     console.log(`${entry[0]} -> ${entry[1]}`);
   }
}

printAddressBook(['Bob:Huxley Rd', 
    'John:MilwaukeeCrossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:MestaCrossing',
'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'])