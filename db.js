require('dotenv').config(); 
const Pool = require('pq').Pool; /* (подключаем класс для работы с БД) */

const PASSWORD = PASSWORD_POSTGRE;

/* (передаем обьект с настройками, имя и порт были при создании по умолчанию) */
const pool = new Pool({
    user: "postgres",
    password: PASSWORD,
    host: "localhost",
    port: 5432,
    database: ""
})

module.exports = pool;