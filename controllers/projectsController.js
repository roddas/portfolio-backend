import { ProjectsModel } from '../models/ProjectsModel';
import {ServerError} from '../helper/errorHandling';

let projectsModel = new ProjectsModel();
let serverErrorHandle = new ServerError();

export class ProjectsController
{
    async readProjects(request, response)
    {
       try
       {
           let projects = await projectsModel.getProjects();
           let results = {
                status : 200,
               data : projects
           }
           response.status(200).json(results);
       }catch(error)
       {
           serverErrorHandle.internalServerError(error,response);
       }
    }
    async postProject(request, response)
    {
        let { nome_projeto, descricao_projeto, estado_projeto, link_projeto } = request.body;
        try
        {
            projectsModel.insertProject(nome_projeto, descricao_projeto, estado_projeto, link_projeto);
            response.status(201).json({status : 201,data : "Projeto criado com sucesso !!"});
        }
        catch(error)
        {
            response.status(500).json({ status: 500, data: "Internal Server Error !!" });
            console.error(error);
        }
    }
    async updateProject(request, response)
    {
        const {id} = request.params;
        let result = { status: 200, data: "Projeto atualizado com sucesso !!" };
        try
        {
            if (await projectsModel.getProjectById(id) === undefined)
            {
                result = { status: 404, data: "Projeto não encontrado !!" };
            }else
            {
                let { nome_projeto, descricao_projeto, estado_projeto, link_projeto } = request.body;
                projectsModel.updateProject(nome_projeto, descricao_projeto, estado_projeto, link_projeto, id);
            }
            response.status(201).json(result);
        }
        catch (error)
        {
            response.status(500).json({ status: 500, data: "Internal Server Error !!" });
            console.error(error);
        }
    }
    async deleteProject(request, response)
    {
        const { id } = request.params;
        let result = { status: 200, data: "Projeto eliminado com sucesso !!" };
        try
        {
            if (await projectsModel.getProjectById(id) === undefined)
            {
                result = { status: 404, data: "Projeto não encontrado !!" };
            }
            else
            {
                projectsModel.removeProject(id);
            }
            response.status(201).json(result);
        }
        catch (error)
        {
            response.status(500).json({ status: 500, data: "Internal Server Error !!" });
            console.error(error);
        }
    }
}
