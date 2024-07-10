function extractEmails(data) {

    let pattern = /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@([a-z]+\-?[a-z]+)(\.[a-z]+)+/g
    let emails = data.match(pattern)

    emails.forEach(element => console.log(element))

}


// function extractEmails(data) {
//     let pattern = /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@([a-z]+\-?[a-z]+)(\.[a-z]+)+/g;
//     let emails = data.match(pattern);

//     if (emails) {
//         console.log(emails.join('\n'));
//     } else {
//         console.log('No emails found');
//     }
// }

extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')
console.log(`------------------------------------`);
extractEmails(`Please contact us at: support@github.com. Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information`)


