const { dbConnect } = require('./data');

class Experiencia
{
    constructor() 
    {
        this.TABLE = 'experiencia';
        this.idField = 'id_experiencia';
    }
    getTable()
    {
        return this.TABLE;
    }
    getIdField()
    {
        return this.idField;
    }
    async getExperiencia() 
    {
        const QUERY = `SELECT * FROM ${this.getTable()};`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY);
        await connection.release();
        return rows;
    }
    async getExperienciaById(id)
    {
        const QUERY = `SELECT * FROM ${this.getTable()} WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [id]);
        await connection.release();
        return rows[0];
    }
    async insertExperiencia(descricao)
    {
        const QUERY = `INSERT INTO ${this.getTable()} VALUES(NULL,?);`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [descricao]);
        await connection.release();
        return rows[0];
    }
    async removeExperiencia(id) 
    {
        const QUERY = `DELETE FROM ${this.getTable()} WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [id]);
        await connection.release();
        return rows[0];
    }
    async updateExperiencia(id,descricao) 
    {
        const QUERY = `UPDATE ${this.getTable()} SET descricao_experiencia = ?  WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [descricao,id]);
        await connection.release();
        return rows[0];
    }
}
module.exports = {Experiencia};