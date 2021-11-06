const { dbConnect } = require('./data');

class Contactos
{
    constructor() 
    {
        this.TABLE = 'contactos';
        this.idField = 'id_contactos';
    }
    getTable()
    {
        return this.TABLE;
    }
    getIdField()
    {
        return this.idField;
    }
    async getContactos() 
    {
        const QUERY = `SELECT * FROM ${this.getTable()};`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY);
        await connection.release();
        return rows;
    }
    async getContactosById(id)
    {
        const QUERY = `SELECT * FROM ${this.getTable()} WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [id]);
        await connection.release();
        return rows[0];
    }
    async insertContacto(tipo, descricao)
    {
        const QUERY = `INSERT INTO ${this.getTable()} VALUES(NULL,?,?);`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [tipo,descricao]);
        await connection.release();
        return rows[0];
    }
    async removeContacto(id) 
    {
        const QUERY = `DELETE FROM ${this.getTable()} WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [id]);
        await connection.release();
        return rows[0];
    }
    async updateContacto(id,tipo,descricao) 
    {
        const QUERY = `UPDATE ${this.getTable()} SET tipo_contactos = ?, descricao_contactos = ?  WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [tipo, descricao,id]);
        await connection.release();
        return rows[0];
    }
}
module.exports = {Contactos};