const colors = require('colors');
const axios = require('axios').default;


console.log('Hola Node'.trap);

axios.get('https://api.sampleapis.com/simpsons/episodes')
    .then((response) => {
        const personajes = response.data;
        const imagenes = [];
        for(let personaje of personajes){
            imagenes.push(personaje.thumbnailUrl);
        }
        console.log(imagenes);
    })
    .catch((error) => {
        console.log(error);
    });


sumar(4, 4);