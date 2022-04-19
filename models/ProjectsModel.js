import { dbConnect } from './data';
import { v4 as uuidv4 } from 'uuid';

export class ProjectsModel
{
    #TABLE;
    #idField;

    constructor() 
    {
        this.TABLE = 'projetos';
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
    async getProjects() 
    {
        const QUERY = `SELECT * FROM ${this.getTable()};`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY);
        await connection.release();
        return rows;
    }
    async getProjectById(id)
    {
        const QUERY = `SELECT * FROM ${this.getTable()} WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [id]);
        await connection.release();0
        return rows[0];
    }
    async insertProject(nome,descricao,estado,link)
    {
        const QUERY = `INSERT INTO ${this.getTable()} VALUES(?,?,?,?,?);`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [uuidv4(),nome, descricao, estado, link]);
        await connection.release();
        return rows[0];
    }
    async removeProject(id)
    {
        const QUERY = `DELETE FROM ${this.getTable()} WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [id]);
        await connection.release();
        return rows[0];
    }
    async updateProject(nome,descricao,estado,link,id)
    {
        const QUERY = `UPDATE ${this.getTable()} SET nome_projeto = ?,descricao_projeto = ?,estado_projeto = ?,link_projeto = ?  WHERE ${this.getIdField()} = ?;`;
        let connection = await dbConnect();
        const [rows] = await connection.query(QUERY, [nome, descricao, estado, link, id]);
        await connection.release();
        return rows[0];
    }
}