const mysql = require('mysql');
require('dotenv').config();

const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME
});

class Database
{
    constructor(scopes = pool)
    {
        //console.log(scopes);
        this.result = {};
    }
    setResult(type,message)
    {
        this.result.type = type;
        this.result.message = message;
    }
    getResult()
    {
        return this.result;
    }
    query(query,...params)
    {
        
    }
}

module.exports = {Database};