const { dbConnect } = require('./data');

class LinguagensFerramentas
{
    constructor() 
    {
        this.TABLE = 'linguagens_ferramentas';
        this.idField = 'id_ferramenta';
    }
    getTable()
    {
        return this.TABLE;
    }
    getIdField()
    {
        return this.idField;
    }
    async getLinguagensFerramentas() 
    {
        const QUERY = `SELECT * FROM ${this.getTable()};`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY);
        await connection.release();
        return rows;
    }
    async getLinguagemFerramentaById(id)
    {
        const QUERY = `SELECT * FROM ${this.getTable()} WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [id]);
        await connection.release();0
        return rows[0];
    }
    async insertLinguagemFerramenta(descricao)
    {
        const QUERY = `INSERT INTO ${this.getTable()} VALUES(NULL,?);`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [descricao]);
        await connection.release();
        return rows[0];
    }
    async removeLinguagemFerramenta(id)
    {
        const QUERY = `DELETE FROM ${this.getTable()} WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [id]);
        await connection.release();
        return rows[0];
    }
    async updateLinguagemFerramenta(id,descricao)
    {
        const QUERY = `UPDATE ${this.getTable()} SET imagem_ferramenta = ?  WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [descricao,id]);
        await connection.release();
        return rows[0];
    }
}
module.exports = { LinguagensFerramentas };