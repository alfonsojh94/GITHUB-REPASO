# API PROFESORES

### Rutas:

- GET /api/profesores

  ## Recupera todos los profesores de la BD y los devuelve en formatio JSON

  1. Crear la ruta dentro de nuesta aplicación (! Prueba que funciona¡)
  2. Crear el modelo de profesores.
  3. Dentro del modelo crear la función getAll()
  4. Ejecutar la función para devolver el JSON correspondiente.

- POST /api/profesores

  ## Crear un profesor y recuperar dicho profesor

  1. Crear la ruta dentro de nuestra aplicación (!Prueba que funciona¡)
  2. Dentro del modelo crear función create()
  3. Ejecutar la función y recuperar (getById) el nuevo profesor creado.

- GET /clientes/IDCLIENTE

  ### Recupera el cliente por IDCLIENTE

  1. Que la ruta funcione (/:identificador)
  2. ¡Cuidado con el orden!
  3. A partir del id del cliente (req.params) obtenemos los datos del mismo.

- GET /api/clientes/mayores/EDAD
  ### Recuperar todos los clientes con edad mayor que la recibida en la URL
  1. Lanzar una query que busque por edad (getByEdad)
