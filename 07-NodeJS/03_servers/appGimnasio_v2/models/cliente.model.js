// Métodos que me permitan interactuar con la tabla de CLIENTES
const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
    return executeQuery('select * from clientes');
}

const create = ({ nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni }) => {
    return executeQuery('insert into clientes (nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni) values (?, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni]);
}

const getById = (clienteId) => {
    return executeQueryOne('select * from clientes where id = ?', [clienteId]);
}

const getByEdad = (edad) => {
    return executeQuery('select * from clientes where edad > ?', [edad]);
}

const update = (clienteId, { nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni }) => {
    return executeQuery('UPDATE clientes SET nombre = ?, apellidos = ?, direccion= ?, email = ?, edad = ?, genero = ?, cuota = ?, fecha_nacimiento = ?, dni = ? WHERE id = ?', [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni, clienteId]);
}

const deleteById = (clienteId) => {
    return executeQuery('delete from clientes where id = ?', [clienteId]);
}

const getByProfesor = (profesorId) => {
    return executeQuery('select * from clientes where profesor_id = ?', [profesorId]);
}

module.exports = {
    getAll, create, getById, getByEdad, update, deleteById, getByProfesor
}