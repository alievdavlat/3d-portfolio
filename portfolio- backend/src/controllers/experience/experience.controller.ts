import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../../utils/errorHandler";
import { typeOrm } from "../../config/typeorm.config";
import { Experience } from "../../entities/experience.entity";
import { postExperiencetValidation, putExperiencetValidation } from "../../validations/experience.validation";


export default {


GET:async ( _:Request, res:Response, next:NextFunction ) => {
  try {
    
    const allExperience = await typeOrm.getRepository(Experience).find()

    if(!allExperience.length) {
      return next(new ErrorHandler('Experience not found', 404))
    }

    res.status(200).json({
        status:200,
        data:allExperience,
        msg:'ok'
    })
  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},
GET_BY_ID: async ( req:Request, res:Response, next:NextFunction ) => {
  try {
    
    const { id } = req.params
    if(!id){
      return next (new ErrorHandler('id required', 400))
    }


    const currentExperience = await typeOrm.getRepository(Experience).findBy({id})


    if(!currentExperience.length) {
      return next(new ErrorHandler('Experience not found', 404))
    }

    res.status(200).json({
        status:200,
        data:currentExperience,
        msg:'ok'
    })
  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},

POST : async (req:Request, res:Response, next:NextFunction) => {
  try {
    
    const { error, value } = postExperiencetValidation.validate(req.body)

    if(error) {
      return next(new ErrorHandler(error.message, 400))
    }

    const { title } = value
    const checkExperience  = await typeOrm.getRepository(Experience).findBy({title})

    if (!checkExperience) {
      return next(new ErrorHandler('Experience already created', 400))
    }

    const newExperience = await typeOrm
          .createQueryBuilder()
          .insert()
          .into(Experience)
          .values({...value})
          .returning(['id', 'title', 'company_name', 'logo', 'logo_bg', 'date', 'decription'])
          .execute()


          res.status(201).send({
            status:201,
            data: newExperience,
            msg:'new project successfuly created'
        })
     
  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},

UPDATE:async ( req:Request, res:Response, next:NextFunction) => {
  try {
    const {id} = req.params
    const {error, value} = putExperiencetValidation.validate(req.body)

    if(error) {
      return next(new ErrorHandler(error.message, 400))
    }

    const checkExperience = await typeOrm.getRepository(Experience).findBy({id})

    if(!checkExperience) {
      return next(new ErrorHandler('Experience not found', 404))
    }

    const updatedExperience = await typeOrm
    .createQueryBuilder()
    .update(Experience)
    .set({...value})
    .where("id = :id", { id })
    .returning(['id', 'title', 'company_name', 'logo', 'logo_bg', 'date', 'decription'])
    .execute()


  res.status(200).send({
      status:200,
      data: updatedExperience,
      msg:'Project  successfuly updated'
  })

  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},

DELETE : async ( req:Request, res:Response, next:NextFunction) =>{
  try {
    const { id } = req.params

    const checkExperience = await typeOrm.getRepository(Experience).findBy({id})

    if(!checkExperience) {
      return next(new ErrorHandler('Experience not found', 404))
    }

    const deletedExperience = await typeOrm
        .createQueryBuilder()
        .delete()
        .from(Experience)
        .where("id = :id", { id })
        .returning(['id', 'title', 'company_name', 'logo', 'logo_bg', 'date', 'decription'])
        .execute()


        return res.status(200).json({
          status:200,
          data:deletedExperience,
          msg:"Project successfuly deleted"
        })

  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
}



}