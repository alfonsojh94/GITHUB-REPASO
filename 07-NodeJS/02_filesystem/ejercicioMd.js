/**
 * 
 * OBJETIVO: Leer y mostrar por consola el contenido de todos los ficheros con extensión .md que se encuentren dentro de un directorio concreto 
 * 
 * - Tenemos que recuperar todos los ficheros contenidos dentro de la carpeta (readdir)
 *      - ¿Qué me devuelve el método readdir? - Hacer console.log para verlo
 * - Leemos el contenido de aquellos ficheros que tengan extensión .md (readFile)
 * 
 */

const fs = require('fs');
const fsPromise = require('fs/promises');

// fs.readdir('./ficheros', (err, files) => {
//     for (let file of files) {
//         if (file.endsWith('.md')) {
//             const data = fs.readFileSync(`./ficheros/${file}`, 'utf-8');
//             console.log(data);
//         }
//     }
// });

(async () => {
    const files = await fsPromise.readdir('./ficheros');
    const filesMd = files.filter(file => file.endsWith('.md'));
    for (let file of filesMd) {
        const data = await fsPromise.readFile(`./ficheros/${file}`, 'utf-8');
        console.log(data);
    }
})();

if (fs.existsSync('./callbacksvspromesas.js')) {
    console.log('EXISTE');
} else {
    console.log('NO EXISTE');
}