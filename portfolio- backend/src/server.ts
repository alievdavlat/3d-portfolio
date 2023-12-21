
import express, { Application, NextFunction, Request, Response } from 'express'
import { typeOrm } from './config/typeorm.config'
import { errorHandlerMiddleware } from './middlewares/errorHandler.middleware'
import cors from 'cors'
import { ErrorHandler } from './utils/errorHandler'
import routes from './routes/routes'
import 'dotenv/config'

const PORT :string | number = process.env.PORT || 3000

const app : Application = express()




  typeOrm
  .initialize()
  .then(() => console.log('db connected'))
  .catch(err => new ErrorHandler(err.message, 503))





app.use(express.json())
app.use(cors());
app.use(routes)
app.use(errorHandlerMiddleware)
app.use('/*', (_:Request, res:Response) => res.status(404).json(`<h1>иди нахер 😁</h1> </br> ---- <h2> Или пожалуйста иди нахуй 😎</h2> `) )





app.listen(PORT , ():void => {
  console.log(`server running on PORT ${PORT}`)
})
