require('dotenv').config(); 
const Pool = require('pg').Pool; /* (подключаем класс для работы с БД) */

const PASSWORD = process.env.PASSWORD_POSTGRE;

/* (передаем обьект с настройками, имя и порт были при создании по умолчанию, в database - имя созданной БД) */
const pool = new Pool({
    user: "postgres",
    password: PASSWORD,
    host: "localhost",
    port: 5432,
    database: "node_postgres"
})

module.exports = pool; /* (подключение понадобится в документах папки controller) */