function passwordGenerator(input) {

    let margeString = input[0] + input[1];

    let lastString = input[2];

    let vowels = ['a', 'e', 'i', 'o', 'u']
    let idx = 0;

    for (let key of margeString) {
        if (vowels.includes(key)) {
            margeString = margeString.replace(key, lastString[idx].toUpperCase());
            idx++;

            if(idx >= lastString.length){
                idx = 0
            }
        }
    }

console.log(`Your generated password is ${margeString.split('').reverse().join('')}`);
}

passwordGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange'
]);