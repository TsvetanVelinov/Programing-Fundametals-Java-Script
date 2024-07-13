function emojiDetector (input) {
    
    let text = input.shift();
    let emojiCount = 0;
    let threshold = 1;
    let coolEmoji = [];
    
    let digits = text.match(/\d/g);
    for (const digit of digits) {
        let digitSum = Number(digit)
        threshold *= digitSum 
    }
    //get all emojis
    let emojiMatches = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g);

    for (const emoji of emojiMatches) {
        
        let emojiName = emoji.groups.name;
        
        emojiCount++;

        //calculate emoji coolness
        let emojiCoolness = 0;
        for (let i = 0; i < emojiName.length; i++) {
            emojiCoolness += emojiName.charCodeAt(i)
        }
        if (emojiCoolness >= threshold) {
            coolEmoji.push(emoji[0]);
        }
    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    for (const emoji of coolEmoji) {
        console.log(`${emoji}`);   
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total!::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:,12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])