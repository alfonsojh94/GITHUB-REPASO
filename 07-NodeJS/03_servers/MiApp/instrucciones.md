RUTAS:

- GET localhost:3000/info
- POST localhost:3000/users/create
- PUT localhost:3000/products/update
- DELETE localhost:3000/students/delete

- Creación de la APP

express --view=pug --git appGimnasio

!! Prestamos atención a las instrucciones que marca la app

- Definimos los scripts en package.json
  - start y dev

- Creamos las siguientes rutas
  - Respondemos siempre con res.send

  - GET /clients - Lista de clientes
  - GET /clients/new - Muestra un formulario para crear clientes
  - POST /clients/create - Crea el cliente
  - GET /clients/edit - Muestra un formulario para editar clientes
  - POST /clients/update - Actualiza el cliente
  - GET /clientes/delete - Borra el cliente

! Rest Client
