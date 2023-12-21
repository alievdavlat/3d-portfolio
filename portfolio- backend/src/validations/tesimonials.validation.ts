
import joi  from 'joi'


const postTestimonialsValidation = joi.object().keys({
  name:joi.string().max(150),
  company:joi.string().required(),
  image:joi.string().required(),
  description:joi.string().required()
 
}) 


const putTestimonialsValidation = joi.object().keys({
  name:joi.string().max(150),
  company:joi.string(),
  image:joi.string(),
  description:joi.string()
}) 


export {
  postTestimonialsValidation,
  putTestimonialsValidation
}