function pascalCaseSplitter (input) {
    
let sortedInput = [];
index = 0;

for ( let i = 1; i < input.length; i++){

    if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
        sortedInput.push(input.substring(index, i));
        index = i;
    }
}
 // Добавяме последната част от низа
 
 sortedInput.push(input.substring(index));

console.log(sortedInput. join(', '));

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')