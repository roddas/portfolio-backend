const { dbConnect } = require('./data');

class Projectos
{
    constructor() 
    {
        this.TABLE = 'projectos';
        this.idField = 'id_projeto';
    }
    getTable()
    {
        return this.TABLE;
    }
    getIdField()
    {
        return this.idField;
    }
    async getProjectos() 
    {
        const QUERY = `SELECT * FROM ${this.getTable()};`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY);
        await connection.release();
        return rows;
    }
    async getProjectoById(id)
    {
        const QUERY = `SELECT * FROM ${this.getTable()} WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [id]);
        await connection.release();0
        return rows[0];
    }
    async insertProjecto(nome,descricao,estado,link)
    {
        const QUERY = `INSERT INTO ${this.getTable()} VALUES(NULL,?,?,?,?);`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [nome, descricao, estado, link]);
        await connection.release();
        return rows[0];
    }
    async removeProjecto(id)
    {
        const QUERY = `DELETE FROM ${this.getTable()} WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [id]);
        await connection.release();
        return rows[0];
    }
    async updateProjecto(nome,descricao,estado,link,id)
    {
        const QUERY = `UPDATE ${this.getTable()} SET nome_projeto = ?,descricao_projeto = ?,estado_projeto = ?,link_projeto = ?  WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [nome, descricao, estado, link, id]);
        await connection.release();
        return rows[0];
    }
}
module.exports = { Projectos };