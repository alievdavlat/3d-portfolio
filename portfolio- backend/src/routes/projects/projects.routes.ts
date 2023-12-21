import { Router } from "express";
import projectsController from "../../controllers/projects/projects.controller";

 const Projects = Router()


            Projects
                .get('/projects', projectsController.GET)
                .get('/projects/:id', projectsController.GET_BY_ID)
                .post('/projects', projectsController.POST)
                .put('/projects/:id', projectsController.UPDATE)
                .delete('/projects/:id', projectsController.DELETE)

 export default Projects