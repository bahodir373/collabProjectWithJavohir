const joi = require("joi")

module.exports.authorValidator = function(data) {
  try{
    const schema = joi.object({
      name : joi.string().minlength(2).maxlength(50).trim().match([/^[A-Za-z0-9]+$/]).required(),
      surname : joi.string().minlength(2).maxlength(50).trim().match([/^[A-Za-z0-9]+$/]).required(),
      birthYear : joi.number().max(Date().getFullYear()).min(1000).required(),
      diedYear : joi.number().max(Date().getFullYear()).min(1000).required(),
      
    })

    return schema.validate(data)

  }catch(error){
    throw new Error(error)
  }
}