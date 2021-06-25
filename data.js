const dotenv = require('dotenv').config({ path: __dirname+'/.env' });
const mysql = require('mysql2/promise');

async function dbConnect()
{
    const pool =  mysql.createPool({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME
    });
    return await pool.getConnection();
}

module.exports = {dbConnect};