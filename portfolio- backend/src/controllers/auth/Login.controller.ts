import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../../utils/errorHandler";
import { loginValidation } from "../../validations/login.validation";
import { typeOrm } from "../../config/typeorm.config";
import { AdminAuth } from "../../entities/auth.entity";
import bcrypt from 'bcrypt'
import { sign } from "../../utils/jwt";
import { IadminAuth } from "../../types";


const  LoginController  = async( req : Request, res : Response, next : NextFunction) => {
  
  const { error, value } = loginValidation.validate(req.body);
  
  if (error) {
    return next(new ErrorHandler(error.message, 400));
  }
  
  const { username, password } = value;
  
  try {

    
    const checkAdmin = await typeOrm
    .getRepository(AdminAuth)
    .findOne({ where: { username } })
  
    if (!checkAdmin) {
      return next(new ErrorHandler("User not found", 404));
    }
  
    let isValidPassword: boolean;
    let token: any;
  
    if (checkAdmin) {
      token = sign({ id: checkAdmin.id, username });
      isValidPassword = await bcrypt.compare(password, checkAdmin.password);
    }
  
    if (!isValidPassword) {
      return next(new ErrorHandler("Username or password not valid", 400));
    }
  
    res.status(200).json({
      status: 200,
      account:checkAdmin,
      token,
      msg: "User successfully logged in",
    });


  } catch (err) {
    return next(new ErrorHandler(err.message, 400)); 
  }
  }

export default LoginController