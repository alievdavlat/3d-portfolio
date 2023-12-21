import { NextFunction, Request, Response } from "express";
import { typeOrm } from "../config/typeorm.config";
import { AdminAuth } from "../entities/auth.entity";
import {hashPassword} from "../utils/hashing";





const addAdmin = async(req:Request, res:Response, next:NextFunction) => {
  const { username , password , avatar } = req.body

  const hashedPassword = await hashPassword(password)



  const newUser = await typeOrm.
          createQueryBuilder()
          .insert()
          .into(AdminAuth)
          .values({
            username, password:hashedPassword, avatar
          })
          .returning(['id', 'username', 'password', 'avatar'])
          .execute()
if(!newUser) res.send('yaratishda xato')
  

if(newUser) res.send(newUser)

}


export default addAdmin