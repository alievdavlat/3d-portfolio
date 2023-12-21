import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../../utils/errorHandler";
import { typeOrm } from "../../config/typeorm.config";
import { Skils } from "../../entities/skils.entity";
import { postSkils, updaetSkils } from "../../validations/skils.validation";


export default {


GET:async ( req:Request, res:Response, next:NextFunction ) => {
  try {
    
    const allSkils = await typeOrm.getRepository(Skils).find()

    if(!allSkils.length) {
      return next(new ErrorHandler('Skils not found', 404))
    }

    res.status(200).json({
        status:200,
        data:allSkils,
        msg:'ok'
    })
  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},
GET_BY_ID: async ( req:Request, res:Response, next:NextFunction ) => {
  try {
    
    const { id } = req.params
    if(!id) {
      return next (new ErrorHandler('id required', 400))
    }


    const currentSkills = await typeOrm.getRepository(Skils).findBy({id})

    if(!currentSkills.length) {
      return next(new ErrorHandler('Skils not found', 404))
    }

    res.status(200).json({
        status:200,
        data:currentSkills,
        msg:'ok'
    })
  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},

POST : async (req:Request, res:Response, next:NextFunction) => {
  try {
    
    const { error, value } = postSkils.validate(req.body)

    if(error) {
      return next(new ErrorHandler(error.message, 400))
    }

    const { title } = value
 
    const checkSkils  = await typeOrm.getRepository(Skils).findBy({title})

    if (!checkSkils) {
      return next(new ErrorHandler('skil already created', 400))
    }

    const newSkil = await typeOrm
          .createQueryBuilder()
          .insert()
          .into(Skils)
          .values({...value})
          .returning(['id', 'title', 'icon'])
          .execute()


          res.status(201).send({
            status:201,
            data: newSkil,
            msg:'new skil successfuly created'
        })
     
  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},

UPDATE:async ( req:Request, res:Response, next:NextFunction) => {
  try {
    const {id} = req.params
    const {error, value} = updaetSkils.validate(req.body)

    if(error) {
      return next(new ErrorHandler(error.message, 400))
    }

    const checkSkils = await typeOrm.getRepository(Skils).findBy({id})

    if(!checkSkils) {
      return next(new ErrorHandler('Skil not found', 404))
    }

    const updatedSkils = await typeOrm
    .createQueryBuilder()
    .update(Skils)
    .set({...value})
    .where("id = :id", { id })
    .returning(['id', 'title', 'icon'])
    .execute()


  res.status(200).send({
      status:200,
      data: updatedSkils,
      msg:'Skil  successfuly updated'
  })

  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},

DELETE : async ( req:Request, res:Response, next:NextFunction) =>{
  console.log(req.params);
  try {
    console.log('hello world');
    
    const { id } = req.params

    
    const checkSkil = await typeOrm.getRepository(Skils).findBy({id})

    console.log(checkSkil);
    

    if(!checkSkil) {
      return next(new ErrorHandler('Skil not found', 404))
    }

    const deletedSkils = await typeOrm
        .createQueryBuilder()
        .delete()
        .from(Skils)
        .where("id = :id", { id })
        .returning(['id', 'title', 'icon'])
        .execute()


         res.status(200).json({
          status:200,
          data:deletedSkils,
          msg:"Skil successfuly deleted"
        })

  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
}



}