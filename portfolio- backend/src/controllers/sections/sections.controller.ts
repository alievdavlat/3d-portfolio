import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../../utils/errorHandler";
import { postSections, updaetSections } from "../../validations/section.validation";
import { typeOrm } from "../../config/typeorm.config";
import { Sections } from "../../entities/sections.entity";




export default {

  POST: async (  req:Request , res:Response, next:NextFunction ) => {
      try {
        
        const { error, value } = postSections.validate(req.body)

        if(error) {
          return next(new ErrorHandler(error.message, 400))
        }


        const { section, status } = value

        const checkSection  = await typeOrm.getRepository(Sections).findBy({section})

        if (!checkSection) {
          return next(new ErrorHandler('section already created', 400))
        }

        const newSection = await typeOrm
              .createQueryBuilder()
              .insert()
              .into(Sections)
              .values({section, status})
              .returning(['id', 'section', 'status'])
              .execute()


              res.status(201).send({
                status:201,
                data: newSection,
                msg:'section successfuly created'
            })

      } catch (err) {
        return next(new ErrorHandler(err.message, 500))
      }
  },
  UPDATE: async ( req:Request , res:Response, next:NextFunction) => {
    try {
        const {error , value } = updaetSections.validate(req.body)

        if(error) {
          return next(new ErrorHandler(error.message, 400))
        }

        const {id, status} = value
        const checkSection = await typeOrm.getRepository(Sections).findBy({id})

        if(!checkSection) {
          return next(new ErrorHandler('section not found', 400))
        }

        const updatedSection  = await typeOrm
            .createQueryBuilder()
            .update(Sections)
            .set({status})
            .where("id = :id", { id })
            .returning(['id', 'section', 'status'])
            .execute()


          res.status(200).send({
              status:200,
              data: updatedSection,
              msg:'section  status successfuly updated'
          })

    } catch (err) {
      return next(new ErrorHandler(err.message, 500))
    }
  },
  GET: async (req:Request , res:Response, next:NextFunction) => {
    try {
      
      const allSections = await typeOrm.getRepository(Sections).find()

      if(!allSections.length) {
        return next(new ErrorHandler('sections not found', 404))
      }

      return res.status(200).json({
        status:200,
        data:allSections,
        msg:"ok"
      })
    } catch (err) {
      return next(new ErrorHandler(err.message, 500))
    }
  },
  DELETE : async (req:Request , res:Response, next:NextFunction) => {
    
  try {
    const { id } = req.params
    
    const checkSection = await typeOrm.getRepository(Sections).findBy({id})

    if(!checkSection) {
      return next(new ErrorHandler('section not found', 404))
    }


    const deletedSection = await typeOrm
        .createQueryBuilder()
        .delete()
        .from(Sections)
        .where("id = :id", { id })
        .returning(['id', 'section', 'status'])
        .execute()


        return res.status(200).json({
          status:200,
          data:deletedSection,
          msg:"section successfuly deleted"
        })

  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }  


  }


}