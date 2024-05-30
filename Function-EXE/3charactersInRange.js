function charactersInRange(str1, str2) {
    
    let startChar = Math.min(str1.charCodeAt(), str2.charCodeAt())
    let endChar = Math.max(str1.charCodeAt(), str2.charCodeAt())

    let charArray = [];

    for( let currentChar = startChar + 1; currentChar < endChar; currentChar++){
        charArray.push(String.fromCharCode(currentChar));
    }

    return charArray.join(' ');


}

console.log(charactersInRange('a', 'd'))















// function charactersInRange(char1, char2) {
//     // Получаваме ASCII кодовете на двата символа
//     let start = char1.charCodeAt(0);
//     let end = char2.charCodeAt(0);

//     // Разменяме началния и крайния код, ако е необходимо
//     if (start > end) {
//         let temp = start;
//         start = end;
//         end = temp;
//     }

//     // Инициализираме празен масив за резултата
//     let result = [];
    
//     // Итериране от start + 1 до end - 1
//     for (let i = start + 1; i < end; i++) {
//         result.push(String.fromCharCode(i)); // Добавяме текущия символ в масива
//     }

//     // Присъединяваме всички символи от масива в един стринг с интервали между тях
//     console.log(result.join(' '));
// }
// charactersInRange('a', 'd'); 
// charactersInRange('d', 'a'); 



