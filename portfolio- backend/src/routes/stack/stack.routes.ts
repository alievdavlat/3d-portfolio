import { Router } from "express";
import stcakController from "../../controllers/stack/stcak.controller";

const Stack = Router()

        Stack
             .get('/stack',stcakController.GET )
             .post('/stack', stcakController.POST)
             .put('/stack/:id',stcakController.UPDATE)
             .delete('/stack/:id',stcakController.DELETE) 


export default Stack