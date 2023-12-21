import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../utils/errorHandler";



  export const  errorHandlerMiddleware = (err:ErrorHandler, _:Request, res:Response, next:NextFunction) => {
      return res.status(err.status).json({
        message: err.message,
        data:null,
        status:err.status
      })
  }