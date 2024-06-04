function gladiatorInventory(input) {
   
    let inventory = input[0].split(' ');

   
    for (let i = 1; i < input.length; i++) {
        let command = input[i].split(' '); // Разделяме командата на части
        let action = command[0]; // Тип на командата (Buy, Trash, Repair, Upgrade)
        let equipment = command[1]; // Оборудване, свързано с командата

        // Изпълняваме действията в зависимост от типа команда
        if (action === 'Buy') {
            // Добавяме оборудването, ако не съществува вече в инвентара
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }
        } else if (action === 'Trash') {
            // Премахваме оборудването, ако съществува в инвентара
            let index = inventory.indexOf(equipment);
            if (index !== -1) {
                inventory.splice(index, 1);
            }
        } else if (action === 'Repair') {
            // Преместваме оборудването в края на инвентара, ако съществува
            let index = inventory.indexOf(equipment);
            if (index !== -1) {
                inventory.splice(index, 1); // Премахваме го от текущата позиция
                inventory.push(equipment); // Добавяме го на края
            }
        } else if (action.startsWith('Upgrade')) {
            // Разделяме командата на оборудване и ъпгрейд
            let [equip, upgrade] = equipment.split('-');
            let index = inventory.indexOf(equip);
            if (index !== -1) {
                // Добавяме ъпгрейда след оборудването в инвентара
                inventory.splice(index + 1, 0, `${equip}:${upgrade}`);
            }
        }
    }

  
    console.log(inventory.join(' '));
}


gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']); // Output: SWORD SWORD:Steel Bag Spear