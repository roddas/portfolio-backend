const { dbConnect } = require('./data');

class Idiomas
{
    constructor() 
    {
        this.TABLE = 'idiomas_tb';
        this.idField = 'id_idioma';
    }
    getTable()
    {
        return this.TABLE;
    }
    getIdField()
    {
        return this.idField;
    }
    async getIdiomas() 
    {
        const QUERY = `SELECT * FROM ${this.getTable()};`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY);
        await connection.release();
        return rows;
    }
    async getIdiomaById(id)
    {
        const QUERY = `SELECT * FROM ${this.getTable()} WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [id]);
        await connection.release();0
        return rows[0];
    }
    async insertIdioma(idioma,nivel)
    {
        const QUERY = `INSERT INTO ${this.getTable()} VALUES(NULL,?,?);`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [idioma,nivel]);
        await connection.release();
        return rows[0];
    }
    async removeIdioma(id) 
    {
        const QUERY = `DELETE FROM ${this.getTable()} WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [id]);
        await connection.release();
        return rows[0];
    }
    async updateIdioma(id,idioma,nivel) 
    {
        const QUERY = `UPDATE ${this.getTable()} SET idioma = ?, nivel = ?  WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [idioma, nivel,id]);
        await connection.release();
        return rows[0];
    }
}
module.exports = { Idiomas };