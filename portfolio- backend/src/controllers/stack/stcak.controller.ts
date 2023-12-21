import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../../utils/errorHandler";
import { typeOrm } from "../../config/typeorm.config";
import { Stack } from "../../entities/stack.entity";
import { stackUpdateValidation, stackValidation } from "../../validations/stack.validation";


export default {


GET:async ( req:Request, res:Response, next:NextFunction ) => {
  try {
    
    const allStack = await typeOrm.getRepository(Stack).find()

    if(!allStack.length) {
      return next(new ErrorHandler('stack not found', 404))
    }

    res.status(200).json({
        status:200,
        data:allStack,
        msg:'ok'
    })
  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},
POST : async (req:Request, res:Response, next:NextFunction) => {
  try {
    
    const { error, value } = stackValidation.validate(req.body)

    if(error) {
      return next(new ErrorHandler(error.message, 400))
    }

    const { title, icon } = value

    
    const checkStack  = await typeOrm.getRepository(Stack).findBy({title})

    if (!checkStack) {
      return next(new ErrorHandler('section already created', 400))
    }

    const newStack = await typeOrm
          .createQueryBuilder()
          .insert()
          .into(Stack)
          .values({title, icon})
          .returning(['id', 'title', 'icon'])
          .execute()


          res.status(201).send({
            status:201,
            data: newStack,
            msg:'new stack successfuly created'
        })
     
  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},

UPDATE:async ( req:Request, res:Response, next:NextFunction) => {
  try {
    const {id} = req.params
    const {error, value} = stackUpdateValidation.validate(req.body)

    if(error) {
      return next(new ErrorHandler(error.message, 400))
    }

    const checkStack = await typeOrm.getRepository(Stack).findBy({id})

    if(!checkStack) {
      return next(new ErrorHandler('stack not found', 404))
    }

    const updatedStack = await typeOrm
    .createQueryBuilder()
    .update(Stack)
    .set({...value})
    .where("id = :id", { id })
    .returning(['id', 'title', 'icon'])
    .execute()


  res.status(200).send({
      status:200,
      data: updatedStack,
      msg:'section  status successfuly updated'
  })

  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
},

DELETE : async ( req:Request, res:Response, next:NextFunction) =>{
  try {
    const { id } = req.params

    const checkStack = await typeOrm.getRepository(Stack).findBy({id})

    if(!checkStack) {
      return next(new ErrorHandler('stack not found', 404))
    }

    const deletedStack = await typeOrm
        .createQueryBuilder()
        .delete()
        .from(Stack)
        .where("id = :id", { id })
        .returning(['id', 'stack', 'icon'])
        .execute()


        return res.status(200).json({
          status:200,
          data:deletedStack,
          msg:"section successfuly deleted"
        })

  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
}



}