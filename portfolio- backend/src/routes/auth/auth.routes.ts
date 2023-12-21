import { Router } from "express";
import addAdmin from '../../controllers/addAdmin'
import LoginController from "../../controllers/auth/Login.controller";


const Auth = Router()

        Auth
            .post('/login', LoginController)
            .post('/admin', addAdmin )


export default Auth