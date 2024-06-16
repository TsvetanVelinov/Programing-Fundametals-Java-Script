function schoolGrades(input) {

 let studentsObject = {};

 for (const command of input) {
    let studentName = command.split(` `);
    let name = studentName.shift()
    let grades = studentName.map(x => Number(x));

    if (studentsObject[name]) {
        
        studentsObject[name] = studentsObject[name].concat(grades);
    } else { 

        studentsObject[name] = grades;
    }
}

    let studentsEntries = Object.entries(studentsObject)
    let sortedStudents = studentsEntries.sort((a, b) => a[0].localeCompare(b[0]))

    for (const [name, grades] of sortedStudents) {
        let sum = 0;

        for (const grade of grades) {
            sum += grade;
        }
        let averageGrades = sum / grades.length;

        console.log(`${name}: ${averageGrades.toFixed(2)}`);
    }
 }    



schoolGrades(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6'])