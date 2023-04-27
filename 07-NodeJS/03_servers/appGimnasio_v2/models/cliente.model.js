const { executeQuery, executeQueryOne } = require('../helpers/utils');



// Métodos que me permitan interactuar con la tabla de CLIENTES


const getAll = () => {
    // return new Promise((resolve, reject) => {
    //     db.query("select * from clientes", (err, result) => {
    //         if (err) reject(err);
    //         resolve(result)
    //     });
    // });

    return executeQuery('select * from clientes', []);
}

const create = ({nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento,dni }) => {
    // return new Promise((resolve, reject) => {
    //     db.query(
    //         'insert into clientes(nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni) values (?, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni]
    //         ,
    //         (err, result) => {
    //             if (err) reject(err)
    //             resolve(result)
    //         }
    //     );    
    // });

    return executeQuery('insert into clientes(nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni) values (?, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni]);
}

const getById = (clienteId) => {
    return executeQueryOne('select * from clientes where id =?', [clienteId]);
}

const getByEdad = (edad) => {
    // return new Promise((resolve, reject) => {
    //     db.query('select * from clientes where edad > ?', [edad], (err, result) => {
    //         if (err) reject(err)
    //         resolve(result)
    //     }
    //     )
    // });

    return executeQuery('select * from clientes where edad > ?', [edad]);
} 

const update = (clienteId, {nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento,dni}) => {
    // return new Promise((resolve, reject) => {
    //     db.query(
    //         'update clientes set nombre = ?, apellidos = ?, direccion = ?, email = ?, edad = ?, genero = ?, cuota = ?, fecha_nacimiento = ?, dni = ? where id = ?', [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni, clienteId],
    //         (err, result) => {
    //             if (err) reject(err)
    //             resolve(result)
    //         }
    //     );
    // });

    return executeQuery('update clientes set nombre = ?, apellidos = ?, direccion = ?, email = ?, edad = ?, genero = ?, cuota = ?, fecha_nacimiento = ?, dni = ? where id = ?', [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni, clienteId]);
}

const deleteById = (clienteId) => {
    return new Promise((resolve, reject) => {
        db.query(
            'delete from clientes where id = ?'
            , [clienteId],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            }
        );
    });
}






module.exports = {
    getAll, create, getById, getByEdad, update, deleteById
}