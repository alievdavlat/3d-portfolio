
import joi  from 'joi'


const updaetSkils = joi.object().keys({
  id:joi.string(),
  icon:joi.string(),
  title:joi.string().max(70)

}) 

const postSkils = joi.object().keys({
  icon:joi.string().required(),
  title:joi.string().required()
}) 




export {
  postSkils,
  updaetSkils
}