import { Router } from "express";
import sections from "../../controllers/sections/sections.controller";


const Sections = Router()

        Sections
              .get('/sections', sections.GET)
              .post('/sections', sections.POST)
              .put('/sections',sections.UPDATE)
              .delete('/sections/:id', sections.DELETE)


export default Sections