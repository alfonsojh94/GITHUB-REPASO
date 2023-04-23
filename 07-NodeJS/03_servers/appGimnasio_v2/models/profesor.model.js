const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from profesores', (err, result) => {
            if (err) reject(err)
            resolve(result)
        })
    });
}

const create = ({ nombre, experiencia, hora_entrada, hora_salida }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into profesores(nombre, experiencia, hora_entrada, hora_salida) value(?, ?, ?, ?)', [nombre, experiencia, hora_entrada, hora_salida], (err, result) => {
            if (err) reject(err)
            resolve(result)
        }
        )
    });
}

const getById = (profesorId) => {
    return new Promise((resolve, reject) => {
        db.query(
            'select * from profesores where id = ?', [profesorId], (err, result) => {
                if (err) reject(err);
                if (result.length === 0) resolve(null);
                resolve(result[0])
            }
        );
    });
}

module.exports = {
    getAll, create, getById
}