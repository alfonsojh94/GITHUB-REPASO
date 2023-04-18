const mysql = require('mysql2');

// mysql://user:pass@host:port/databaseName
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'mysqlpassword',
    port: 3306,
    database: 'gimnasio'
});

const clientId = 45;

conn.connect((err) => {
    // conn.query('select * from clientes', (err, result) => {
    //     console.log(err);
    //     console.log(result[23]);
    // })

    conn.query('select * from clientes where id = ?', [clientId], (err, result) => {
        console.log(result);
    });
});