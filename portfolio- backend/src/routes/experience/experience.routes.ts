import { Router } from "express";

import Experience from '../../controllers/experience/experience.controller'

const experience = Router()

          experience
                  .get('/experience',Experience.GET)
                  .get('/experience/:id', Experience.GET_BY_ID)
                  .post('/experience', Experience.POST)
                  .put('/experience/:id', Experience.UPDATE)
                  .delete('/experience/:id', Experience.DELETE)


                  
export default experience