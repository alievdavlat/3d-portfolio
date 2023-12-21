import jwt from 'jsonwebtoken'
import { Ipayload } from '../types'



 const sign = (payload:Ipayload) => {
  return jwt.sign(payload, process.env.SECRET_KEY as string,{
    expiresIn:'48h'
  })
}

const verify = (token:string) => jwt.verify(token ,process.env.SECRET_KEY  as string )


export  {
  sign,
  verify
}

