
import joi  from 'joi'


const postExperiencetValidation = joi.object().keys({
  title:joi.string().required().max(120),
  company_name:joi.string().required(),
  logo:joi.string().required(),
  logo_background:joi.string().required(),
  date:joi.string().required(),
  decription:joi.array().required(),
}) 


const putExperiencetValidation = joi.object().keys({
  title:joi.string().max(150),
  company_name:joi.string(),
  logo:joi.string(),
  logo_background:joi.string(),
  date:joi.string(),
  decription:joi.array(),
}) 


export {
  postExperiencetValidation,
  putExperiencetValidation
}