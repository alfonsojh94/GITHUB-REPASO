const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "1804017",
    port: 3306,
    database: "gimnasio"
});

global.db = pool;

