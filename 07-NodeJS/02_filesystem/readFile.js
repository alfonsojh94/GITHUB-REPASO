const fs = require('fs');
const fsPromise = require('fs/promises');

// Síncrona
const content = fs.readFileSync('./ficheros/uno.md', 'utf-8');
// console.log(content);

// Asíncrona
fs.readFile('./ficheros/uno.md', 'utf-8', (err, data) => {
    // console.log(err);
    // console.log(data);
});

// Promesas
fsPromise.readFile('./ficheros/uno.md', 'utf-8')
    .then((data) => {
        // console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

// Async - await
(async () => {
    const data = await fsPromise.readFile('./ficheros/uno.md', 'utf-8');
    console.log(data);
})();