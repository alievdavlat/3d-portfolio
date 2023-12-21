
import joi  from 'joi'


const postProjectValidation = joi.object().keys({
  name:joi.string().required().max(150),
  image:joi.string().required(),
  source:joi.string().required(),
  description:joi.string().required(),
  tags:joi.array().required(),
  iframe:joi.string().required(),
  stack:joi.string().required()
}) 


const putProjectValidation = joi.object().keys({
  name:joi.string().max(150),
  image:joi.string(),
  source:joi.string(),
  description:joi.string(),
  tags:joi.array(),
  iframe:joi.string(),
  stack:joi.string()
}) 


export {
  postProjectValidation,
  putProjectValidation
}