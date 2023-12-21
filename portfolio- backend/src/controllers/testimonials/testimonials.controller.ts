import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../../utils/errorHandler";
import { typeOrm } from "../../config/typeorm.config";
import { Testimonials } from "../../entities/testimonials.entity";
import { postTestimonialsValidation, putTestimonialsValidation } from "../../validations/tesimonials.validation";


export default {


GET:async ( req:Request, res:Response, next:NextFunction ) => {
  try {
    
    const allTestimonials = await typeOrm.getRepository(Testimonials).find()

    if(!allTestimonials.length) next(new ErrorHandler('Testimonials not found', 404))

    res.status(200).json({
        status:200,
        data:allTestimonials,
        msg:'ok'
    })
  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},
GET_BY_ID: async ( req:Request, res:Response, next:NextFunction ) => {
  try {
    
    const { id } = req.params
    if(!id) next (new ErrorHandler('id required', 400))


    const currentTestimonials = await typeOrm.getRepository(Testimonials).findBy({id})

    if(!currentTestimonials.length) next(new ErrorHandler('Testimonial not found', 404))

    res.status(200).json({
        status:200,
        data:currentTestimonials,
        msg:'ok'
    })
  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},

POST : async (req:Request, res:Response, next:NextFunction) => {
  try {
    
    const { error, value } = postTestimonialsValidation.validate(req.body)

    if(error) {
      return next(new ErrorHandler(error.message, 400))
    }

    const { name } = value
 
    const checkTestimonial  = await typeOrm.getRepository(Testimonials).findBy({name})

    if (!checkTestimonial) {
      return next(new ErrorHandler('Testimonial already created', 400))
    }

    const newTestimonials = await typeOrm
          .createQueryBuilder()
          .insert()
          .into(Testimonials)
          .values({...value})
          .returning(['id', 'name', 'company', 'image', 'description'])
          .execute()


          res.status(201).send({
            status:201,
            data: newTestimonials,
            msg:'new Testimonial successfuly created'
        })
     
  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},

UPDATE:async ( req:Request, res:Response, next:NextFunction) => {
  try {
    const {id} = req.params
    const {error, value} = putTestimonialsValidation.validate(req.body)

    if(error) {
      return next(new ErrorHandler(error.message, 400))
    }

    const checkTestimonial = await typeOrm.getRepository(Testimonials).findBy({id})

    if(!checkTestimonial) {
      return next(new ErrorHandler('Testimonial not found', 404))
    }

    const updatedTestimonial = await typeOrm
    .createQueryBuilder()
    .update(Testimonials)
    .set({...value})
    .where("id = :id", { id })
    .returning(['id', 'name', 'company', 'image', 'description'])
    .execute()


  res.status(200).send({
      status:200,
      data: updatedTestimonial,
      msg:'Testimonial  successfuly updated'
  })

  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},

DELETE : async ( req:Request, res:Response, next:NextFunction) =>{
  try {
    const { id } = req.params

    const checkTestimonial = await typeOrm.getRepository(Testimonials).findBy({id})

    if(!checkTestimonial) {
      return next(new ErrorHandler('Testimonial not found', 404))
    }

    const deletedTestimonial = await typeOrm
        .createQueryBuilder()
        .delete()
        .from(Testimonials)
        .where("id = :id", { id })
        .returning(['id', 'name', 'company', 'image', 'description'])
        .execute()


        return res.status(200).json({
          status:200,
          data:deletedTestimonial,
          msg:"Testimonial successfuly deleted"
        })

  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
}



}