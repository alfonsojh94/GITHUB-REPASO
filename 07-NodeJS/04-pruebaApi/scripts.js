const clientesContainer = document.querySelector('.clientes')


//Realizar peticiones HTTP
async function main() {
    const response = await fetch('http://localhost:3000/api/clientes')
    const data = await response.json();

    for (let cliente of data) {
        const div = document.createElement('div');
        div.classList.add('cliente');

        const h3 = document.createElement('h3');
        h3.innerText = cliente.nombre + ' ' + cliente.apellidos;

        const pDireccion = document.createElement('p');
        pDireccion.innerText = cliente.direccion;

        const pEmail = document.createElement('p');
        pEmail.innerText = cliente.email;

        div.appendChild(h3);
        div.appendChild(pDireccion);
        div.appendChild(pEmail);

        clientesContainer.appendChild(div);
    }
}

main();