

let text = '*';   


for(let i = 1; i <= 10; i++)
    
    { console.log(text.repeat(i))

}




let texts = '*';
let height = 10;

for (let i = 1; i <= height; i++) {
    let spaces = ' '.repeat(height - i);
    let stars = text.repeat(i * 2 - 1); // Увеличаваме звездичките по нечетна прогресия
    console.log(spaces + stars + spaces);

}


let sentence = "He passed away";
console.log(sentence.padEnd(20, '.'));

//output: He passed away......