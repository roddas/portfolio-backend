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
           response.json(projects);
       }catch(error)
       {
           serverErrorHandle.internalServerError(error,response);
       }
    }
    async postProject(request, response) { }
    async updateProject(request, response) { }
    async deleteProject(request, response) { }
}
