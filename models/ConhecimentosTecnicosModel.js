const { dbConnect } = require('./data');

class ConhecimentosTecnicos
{
    constructor() 
    {
        this.TABLE = 'conhecimentos_tecnicos_tb';
        this.idField = 'id_conhecimento';
    }
    getTable()
    {
        return this.TABLE;
    }
    getIdField()
    {
        return this.idField;
    }
    async getConhecimentosTecnicos() 
    {
        const QUERY = `SELECT * FROM ${this.getTable()};`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY);
        await connection.release();
        return rows;
    }
    async getConhecimentosTecnicosById(id)
    {
        const QUERY = `SELECT * FROM ${this.getTable()} WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [id]);
        await connection.release();
        return rows[0];
    }
    /**
     * @param {string} texto de descrição do conhecimento
     * @returns 
     */
    async insertConhecimentosTecnicos(descricao)
    {
        const QUERY = `INSERT INTO ${this.getTable()} VALUES(NULL,?);`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [descricao]);
        await connection.release();
        return rows[0];
    }
    async removeConhecimentosTecnicos(id) 
    {
        const QUERY = `DELETE FROM ${this.getTable()} WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [id]);
        await connection.release();
        return rows[0];
    }
    async updateConhecimentosTecnicos(id,descricao) 
    {
        const QUERY = `UPDATE ${this.getTable()} SET descricao_conhecimento = ? WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [descricao,id]);
        await connection.release();
        return rows[0];
    }
}
module.exports = {ConhecimentosTecnicos};