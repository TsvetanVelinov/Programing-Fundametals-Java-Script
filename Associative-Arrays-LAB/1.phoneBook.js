function printPhoneBook(input) {

    let phoneBook = {};

   for (const entry of input) {
    let entryArr = entry.split(` `);
    let name = entryArr[0];
    let value = entryArr[1];

    phoneBook[name] = value;

   }

   for (const name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`);
   }
    
}

printPhoneBook(['George 0552554',

    'Peter 087587',
    
    'George 0453112',
    
    'Bill 0845344'])