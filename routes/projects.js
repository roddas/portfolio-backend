import { Router } from "express";
import {ProjectsController} from '../controllers/projectsController';

let router = Router();
let projectController = new ProjectsController();

router.get('/', projectController.readProjects);
router.post('/', projectController.postProject);

module.exports = router;