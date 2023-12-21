import { Router } from "express";

import testimonialsController from "../../controllers/testimonials/testimonials.controller";

const testimonials = Router()

          testimonials  
              .get('/testimonials', testimonialsController.GET)
              .get('/testimonials/:id', testimonialsController.GET_BY_ID)
              .post('/testimonials', testimonialsController.POST)
              .put('/testimonials/:id', testimonialsController.UPDATE)
              .delete('/testimonials/:id', testimonialsController.DELETE)



export default testimonials
