import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../../utils/errorHandler";
import { typeOrm } from "../../config/typeorm.config";
import { Projects } from "../../entities/projects.entity";
import { postProjectValidation, putProjectValidation } from "../../validations/projectsvalidation";


export default {


GET:async ( req:Request, res:Response, next:NextFunction ) => {
  try {
    
    const allProjects = await typeOrm.getRepository(Projects).find()

    if(!allProjects.length) {
      return next(new ErrorHandler('Projects not found', 404))
    }

    res.status(200).json({
        status:200,
        data:allProjects,
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


    const currentProject = await typeOrm.getRepository(Projects).findBy({id})

    if(!currentProject.length) {
      return next(new ErrorHandler('Project not found', 404))
    }

    res.status(200).json({
        status:200,
        data:currentProject,
        msg:'ok'
    })
  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},

POST : async (req:Request, res:Response, next:NextFunction) => {
  try {
    
    const { error, value } = postProjectValidation.validate(req.body)

    if(error) {
      return next(new ErrorHandler(error.message , 400))
    }

    const { name } = value
 
    const checkProject  = await typeOrm.getRepository(Projects).findBy({name})

    if (!checkProject) next(new ErrorHandler('Project already created', 400))

    const newProject = await typeOrm
          .createQueryBuilder()
          .insert()
          .into(Projects)
          .values({...value})
          .returning(['id', 'name', 'image', 'source', 'description', 'tags', 'iframe', 'stack'])
          .execute()


          res.status(201).send({
            status:201,
            data: newProject,
            msg:'new project successfuly created'
        })
     
  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},

UPDATE:async ( req:Request, res:Response, next:NextFunction) => {
  try {
    const {id} = req.params
    const {error, value} = putProjectValidation.validate(req.body)

    if(error) {
      return next(new ErrorHandler(error.message, 400))
    }

    const checkProject = await typeOrm.getRepository(Projects).findBy({id})

    if(!checkProject) {
      return next(new ErrorHandler('Project not found', 404))
    }

    const updatedProject = await typeOrm
    .createQueryBuilder()
    .update(Projects)
    .set({...value})
    .where("id = :id", { id })
    .returning(['id', 'name', 'image', 'source', 'description', 'tags', 'iframe', 'stack'])
    .execute()


  res.status(200).send({
      status:200,
      data: updatedProject,
      msg:'Project  successfuly updated'
  })

  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},

DELETE : async ( req:Request, res:Response, next:NextFunction) =>{
  try {
    const { id } = req.params

    const checkProject = await typeOrm.getRepository(Projects).findBy({id})

    if(!checkProject) {
      return next(new ErrorHandler('Project not found', 404))
    }

    const deletedProject = await typeOrm
        .createQueryBuilder()
        .delete()
        .from(Projects)
        .where("id = :id", { id })
        .returning(['id', 'name', 'image', 'source', 'description', 'tags', 'iframe', 'stack'])
        .execute()


        return res.status(200).json({
          status:200,
          data:deletedProject,
          msg:"Project successfuly deleted"
        })

  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
}

}