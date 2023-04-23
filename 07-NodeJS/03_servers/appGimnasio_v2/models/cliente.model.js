// Métodos que me permitan interactuar con la tabla de CLIENTES


const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query("select * from clientes", (err, result) => {
            if (err) reject(err);
            resolve(result)
        });
    });
}

const getAllProfesores = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from profesores', (err, result) => {
            if (err) reject(err)
            resolve(result)
        })
    });
}

const create = ({nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento,dni }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'insert into clientes(nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni) values (?, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni]
            ,
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            }
        );    
    });
}

const getById = (clienteId) => {
    return new Promise((resolve, reject) => {
        db.query(
            'select * from clientes where id = ?', [clienteId], (err, result) => {
                if (err) reject(err);
                //Si el resultado es igual a 0 dame un null
                if (result.length === 0) resolve(null);
                //Devuelveme positivamente la primera posiición
                resolve(result[0]);  
            }
        );
    });
}

const getByEdad = (edad) => {
    return new Promise((resolve, reject) => {
        db.query('select * from clientes where edad > ?', [edad], (err, result) => {
            if (err) reject(err)
            resolve(result)
        }
        )
    });
} 

const update = (clienteId, {nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento,dni}) => {
    return new Promise((resolve, reject) => {
        db.query(
            'update clientes set nombre = ?, apellidos = ?, direccion = ?, email = ?, edad = ?, genero = ?, cuota = ?, fecha_nacimiento = ?, dni = ? where id = ?', [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni, clienteId],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            }
        );
    });
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
    getAll, getAllProfesores, create, getById, getByEdad, update, deleteById
}