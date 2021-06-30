const {dbConnect} = require('./data');

const FAILURE = 'FAILURE';
const SUCCESS = 'SUCCESS';

class Database
{
    constructor()
    {
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
    async getAllElements(table)
    {
       const QUERY = `SELECT * FROM ${table};`;
       let connection = await dbConnect();
       const [rows] = await connection.query(QUERY);
       await connection.release();
       return rows;
    }
    async getElementById(table,id_field,id)
    {
        const QUERY = `SELECT * FROM ${table} WHERE ${id_field} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY,[id]);
        await connection.release();
        return rows[0];
    }
    async removeElementById(table, id_field, id) {
        const QUERY = `DELETE FROM ${table} WHERE ${id_field} = ?;`;
        let connection = await dbConnect();
        await connection.query(QUERY, [id]);
        await connection.release();
    }
    getIdKey(object)
    {
        let i = 1;
        let idName = undefined;
        for (let a in object)
        {
            if (i++ == 1)
            {
                idName = a;
                break;
            }
        }
        return idName;
    }
    async insertElement(table,elements)
    {
        let query = `INSERT INTO ${table} VALUES (NULL,`;
        const SIZE = elements.length;
        for(let a = 0; a < SIZE-1;a++)
        {
            query+='?,';
        }
        query += '?);';
        console.log(query);
        let connection = await dbConnect();
        try
        {
            if(SIZE > 1)
            {
                await connection.query(query, elements);
            }else
            {
                await connection.query(query, [elements]);
            }   
        }
        catch(e)
        {
            console.error(e);
        }finally
        {
            await connection.release();
        }
    }
    async insertElement(table,elements)
    {
        let query = `INSERT INTO ${table} VALUES (NULL,`;
        const SIZE = elements.length;
        for(let a = 0; a < SIZE-1;a++)
        {
            query+='?,';
        }
        query += '?);';
        console.log(query);
        let connection = await dbConnect();
        try
        {
            if(SIZE > 1)
            {
                await connection.query(query, elements);
            }else
            {
                await connection.query(query, [elements]);
            }   
        }
        catch(e)
        {
            console.error(e);
        }finally
        {
            await connection.release();
        }
    }
}
module.exports = {Database};