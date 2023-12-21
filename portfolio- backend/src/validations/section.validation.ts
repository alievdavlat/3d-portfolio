
import joi  from 'joi'


const updaetSections = joi.object().keys({
  id:joi.string().required(),
  status:joi.boolean().required()
}) 

const postSections = joi.object().keys({
  section:joi.string().required().max(70),
  status:joi.boolean().required()
}) 




export {
  updaetSections,
  postSections
}