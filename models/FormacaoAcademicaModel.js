const { dbConnect } = require('./data');

class FormacaoAcademica
{
    constructor() 
    {
        this.TABLE = 'formacao_academica_tb';
        this.idField = 'id_formacao';
    }
    getTable()
    {
        return this.TABLE;
    }
    getIdField()
    {
        return this.idField;
    }
    async getFormacaoAcademica() 
    {
        const QUERY = `SELECT * FROM ${this.getTable()};`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY);
        await connection.release();
        return rows;
    }
    async getFormacaoAcademicaById(id)
    {
        const QUERY = `SELECT * FROM ${this.getTable()} WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [id]);
        await connection.release();0
        return rows[0];
    }
    async insertFormacaoAcademica(descricao,desde,ate)
    {
        const QUERY = `INSERT INTO ${this.getTable()} VALUES(NULL,?,?,?);`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [descricao,desde,ate]);
        await connection.release();
        return rows[0];
    }
    async removeFormacaoAcademica(id) 
    {
        const QUERY = `DELETE FROM ${this.getTable()} WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [id]);
        await connection.release();
        return rows[0];
    }
    async updateFormacaoAcademica(id,descricao,desde,ate) 
    {
        const QUERY = `UPDATE ${this.getTable()} SET descricao_formacao = ?, desde=?, ate=?  WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [descricao,desde,ate,id]);
        await connection.release();
        return rows[0];
    }
}
module.exports = {FormacaoAcademica};