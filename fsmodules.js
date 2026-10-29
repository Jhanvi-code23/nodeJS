// const fs = require('fs');
// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err); //agar error aata h to console mein print kr do
//     } else {
//         console.log(data); //to read text from file.txt and print it in console
//     }
// });

//file.txt - "kya" read krna h
//utf8 - "kis format" mein read krna h
//(err, data) - basically a callback function h jo read krne ke baad kya karna h, agar error aata h to err mein aayega aur agar data read ho jata h to data mein aayega

//it is asynchronous function, so it will not block the execution of the code. It will read the file in the background and once it is done, it will call the callback function with the result.
const fs = require('fs');
console.log("1");
// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log("2");
//     console.log(data);
// });
// console.log("3"); //this will be printed before the file content


//readfileSync() - synchronous function h, so it will block the execution of the code until the file is read. It will return the content of the file.
fs.readFileSync('file.txt', 'utf8'); //readFileSync mein callback function nahi hota, ye synchronous function h, to ye file read hone ke baad hi next line execute karega
console.log("2");
console.log(fs.readFileSync('file.txt', 'utf8'));
console.log("3"); //this will be printed after the file content



//writeFile() - asynchronous function h, so it will not block the execution of the code. It will write the content to the file in the background and once it is done, it will call the callback function with the result.
fs.writeFile('file.txt', 'Hello World!', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("File written successfully");
    }
});

//file.txt - "kaha" write krna h
//Hello World! - "kya" write krna h


// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(data);
//     }
// });

//writeFileSync() - synchronous function h, so it will block the execution of the code until the file is written. It will return nothing.
fs.writeFileSync('file.txt', 'Hello World!'); //writeFileSync mein callback function nahi hota, ye synchronous function h, to ye file write hone ke baad hi next line execute karega
console.log("File written successfully");
