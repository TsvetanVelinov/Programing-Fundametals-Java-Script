function repeatString (initial, count) {
    
    let result = "";
    for (let i = 0; i < count; i++) {
        result += initial; 
    }
    return result;
}

let resultFromFunction = repeatString("abc", 3 )
console.log(resultFromFunction);
