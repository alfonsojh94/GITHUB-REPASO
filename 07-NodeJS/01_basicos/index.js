//Importaciones de Terceros
const colors = require('colors');
const axios = require('axios').default;

//Importaciones NUESTRAS
const operaciones = require('./operaciones');
const {sumar,restar,multiplicar,dividir} = require('./operaciones');
const Persona = require('./Persona');
//PRACTICA DE OPERACIONES Y CLASES
const operaciones2 = require('./Operaciones2');
const{sumarPrubra, restarYsuma, iva} = require('./Operaciones2');
const Persona2 = require('./Persona2');

console.log('Hola Node'.trap);

// axios.get('https://api.sampleapis.com/simpsons/episodes')
//     .then((response) => {
//         const personajes = response.data;
//         const imagenes = [];
//         for(let personaje of personajes){
//             imagenes.push(personaje.thumbnailUrl);
//         }
//         console.log(imagenes);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//OPCIÓN I (NORMAL)
console.log(operaciones.sumar(4, 4));

console.log(operaciones.restar(4, 4));

console.log(operaciones.multiplicar(4,4));

console.log(operaciones.dividir(4, 4));

//OPCIÓN II (DESTRUCTURING)

console.log(`Opción II Sumar: ${sumar(4, 4)}`);

console.log(`Opción II Restar: ${restar(4, 4)}`);

console.log(`Opción II Multiplicar: ${multiplicar(4, 4)}`);

console.log(`Opción II Dividir: ${dividir(4,4)}`);

const pers = new Persona('Rocío','López', 45);
console.log(pers.mostrar());

/// PRACTICA FUNCIONES Y CLASES
console.log(operaciones2.sumarPrubra(7,7));

console.log(operaciones2.restarYsuma(4,4));

console.log(`Suma desde Operaciones2 -> ${sumarPrubra(7,7)}`);

console.log(operaciones2.iva(20));

console.log(`Ahora te voy a calcular el I.V.A de una cantidad ${iva(20)}`);




console.log('...............:Practica de Clases:..............');

const personaNueva = new Persona2('Alfonso','Jiménez Hidalgo',28,1994,1.82);
console.log(personaNueva.imprimir());

console.log(__dirname);
console.log(__filename);

console.log(process.argv);