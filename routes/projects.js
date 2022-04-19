import { Router } from "express";
import {ProjectsController} from '../controllers/projectsController';

let router = Router();
let projectController = new ProjectsController();

router.get('/', projectController.readProjects);
router.post('/', projectController.postProject);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;