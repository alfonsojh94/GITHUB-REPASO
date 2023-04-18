## API Profesores

### Rutas:

- GET /api/profesores
  ## Recupera todos los profesores de la BD y los devuelve en formato JSON
  1. Crear la ruta dentro de nuestra aplicación (¡PRUEBA QUE FUNCIONA!)
  2. Crear el modelo de profesores
  3. Dentro del modelo crear función getAll
  4. Ejecutar la función para devolver el JSON correspondiente

- POST /api/profesores
  ## Crear un profesor y recuperar dicho profesor
  1. Crear la ruta dentro de nuestra aplicación (¡PRUEBA QUE FUNCIONA!)
  2. Dentro del modelo crear función create
  3. Ejecutar la función y recuperar (getById) el nuevo profesor creado

- GET /api/clientes/IDCLIENTE
  ### Recupera el cliente por IDCLIENTE
  1. Que la ruta funcione (/:identificador)
  2. ¡Cuidado con el orden!
  3. A partir del id del cliente (req.params) obtenemos los datos del mismo

- GET /api/clientes/mayores/EDAD
  - select * from clientes where edad > XXXXXX
  ### Recuperar todos los clientes con edad mayor que la recibida en la URL
  1. Lanzar query que busque por edad (getByEdad)

- DELETE /IDCLIENTE
  - delete from clientes where id = ?

# Tareas pendientes

- Petición PUT y DELETE del API de profesores
- Creación del método executeQuery dentro de cliente.model.js para generalizar
  la ejecución de las queries
  - ¿Qué parámetros recibe?
  - ¿Cómo gestiono la promesa dentro de este nuevo método?

## Lista de todos los profesores con sus alumnos asignados

```json
[
  {
    "nombre": "Glenna Shepherd",
    "experiencia": 19,
    "clientes": [
      { "nombre": ...},
      { "nombre": ...},
      { "nombre": ...},
    ]
  },{
    "nombre": "Tamara Solomon",
    "experiencia": 16,
    "clientes": [
      { "nombre": ...}
    ]
  }
]
```

- Formas de pensarlo:
  - Intento extraer todos los datos directamente desde MySQL
  - Extraigo de manera independiente profesores por un lado y los clientes de
    cada profesor por otro y luego los junto

GET /api/profesores/clientes

## PROEYECTO PRUEBA_API

- ¿Qué pasa cuando pido todos los clientes?
  - ¿Cómo doy una solución a lo que sucede?
- Generar un fichero registro.html (con su script)
  - Muestra un formulario con todos los campos para el regitro (username, email,
    password)
  - Cuando pulsemos el boton de submit del formulario
    1. Hay que lanzar una función asociada al evento onsubmit
    2. El formulario no realice la función que tiene definida por defecto
       (event.preventDefault)
    3. Hay que crear con FETCH una petición POST sobre /api/usuarios/register
       enviando los datos del formulario

## GET /api/usuarios/perfil

- El objetivo es recuperar todos los datos del usuario logado y devolverlos en
  formato JSON
- Si antes de llegar a la función final (o función manejadora) pasamos a través
  del método CHECKTOKEN, tenemos disponibles los datos del usuario logado

- ¡No hacemos queries a la BD!

## APP WORLD

- Crear la aplicación

express --view=pug --git appWorld

routes/countries.js

- Respondemos con res.send

- GET /countries
- GET /countries/new
- GET /countries/edit
- POST /countries/create
- POST /countries/update
