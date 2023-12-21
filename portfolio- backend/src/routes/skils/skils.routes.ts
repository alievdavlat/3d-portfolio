import { Router } from "express";

import skilsControllers from "../../controllers/skiils/skils.controllers";


const Skils  = Router()

      Skils
          .get('/skils', skilsControllers.GET)
          .get('/skils/:id', skilsControllers.GET_BY_ID)
          .post('/skils', skilsControllers.POST)
          .put('/skils/:id', skilsControllers.UPDATE)
          .delete('/skils/:id', skilsControllers.DELETE)



export default Skils