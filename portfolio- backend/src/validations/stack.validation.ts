
import joi  from 'joi'


  const stackValidation = joi.object().keys({
    title:joi.string().required(),
    icon:joi.string().required()
  }) 


const stackUpdateValidation = joi.object().keys({
  title:joi.string(),
  icon:joi.string()
}) 



export {
  stackValidation,
  stackUpdateValidation
}