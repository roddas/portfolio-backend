import { ProjectsModel } from '../models/ProjectsModel';

let projectsModel = new ProjectsModel();

export class ProjectsController
{
    async readProjects(request, response)
    {
        let projects = await projectsModel.getProjects();
        response.json(projects);
    }
    async postProject(request, response) { }
    async updateProject(request, response) { }
    async deleteProject(request, response) { }
}
