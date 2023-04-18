const fs = require('fs');
const fsPromise = require('fs/promises');

// Síncrona
const files = fs.readdirSync('../01_basicos', { withFileTypes: true });
console.log(files);

// Asíncrona
fs.readdir('../01_basicos', (err, files) => {
    console.log("CALLBACK", files);
});
console.log('FINAL');

// Promesas
// Promise<string[]>
fsPromise.readdir('../01_basicos')
    .then((files) => {
        console.log('PROMISE', files);
    })
    .catch((error) => {
        console.log(error);
    });

// Async-await
(async () => {
    const filesProm = await fsPromise.readdir('../01_basicos');
    console.log(filesProm);
})();


