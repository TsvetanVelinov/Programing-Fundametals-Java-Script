function legendaryFarming(str) {

    let arr = str.split(` `);

    let keyMaterialQuantity = { shards: 0, fragments: 0, motes: 0 };
    let junkMaterialQuantity = {};

    let legendaries = { shards: `Shadowmourne`, fragments: `Valanyr`, motes: `Dragonwrath` }

    for (let command = 0; command < arr.length; command += 2) {

        let quantity = Number(arr[command]);
        let material = arr[command + 1].toLowerCase();

        if (material in keyMaterialQuantity) {
            keyMaterialQuantity[material] += quantity;

            if (keyMaterialQuantity[material] >= 250) {
                let legendary = legendaries[material];
                console.log(`${legendary} obtained!`);
                keyMaterialQuantity[material] -= 250;
                break;
            }
        } else {
            if(material in junkMaterialQuantity){
                junkMaterialQuantity[material] += quantity;
            } else {
                junkMaterialQuantity[material] = quantity;
            }
        }
    }
    let keyMaterialEntries = Object.entries(keyMaterialQuantity)
    .sort((a,b) => (b[1] - a[1]) || a[0].localeCompare(b[0]))

    let junkMaterialEntries = Object.entries(junkMaterialQuantity)
    .sort((a,b) => a[0].localeCompare(b[0]));

     for (let [keyMaterial, quantityMaterial] of keyMaterialEntries) {
         
             console.log(`${keyMaterial}: ${quantityMaterial}`);   
     }
     for (let [junkMaterial, quantityMaterial] of junkMaterialEntries) {
         
        console.log(`${junkMaterial}: ${quantityMaterial}`);   
}

}

legendaryFarming
    ('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
    console.log(`-----------------------------`);
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')































//еквивалентно на .split(` `)

// let arr = [];
// let word = ``;

// for(let i = 0; i < arr.length; i++){
//     if(str[i] === ' '){
//         if(word.length > 0){
//             arr.push(word);
//             word = '';
//         }
//     } else {
//         word += str[i];
//     }
// }

// if(word.length > 0){
//     arr.push(word);
// }
// console.log(arr);