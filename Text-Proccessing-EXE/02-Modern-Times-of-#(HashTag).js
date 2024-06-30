function modernTimes(input) {
    
 let arrSentence = input.split(' ');

//  for(let word of arrSentence){

//    if(word[0] === '#' && word.length > 1){
//    }
//  }

let specialWord = arrSentence
.filter(someWord => someWord.startsWith('#') && someWord.length > 1)

for (const word of specialWord) {

    let finalWord = word.slice(1)

    let pattern = /\b[A-Za-z]+\b/;
    
    if(pattern.test(finalWord))
    
    console.log(finalWord);
}

}

modernTimes
('The symbol # is known #variously inEnglish-speaking #regions as the #number sign')




// for (const hashtag of arrSentence) {
     
//     let specialWord = hashtag.slice(1);    
//         console.log(specialWord);
//     }