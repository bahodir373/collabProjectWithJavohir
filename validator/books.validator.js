const joi = require("joi")

module.exports.bookValidate = function(data) {
  try{
    const schema = joi.object({
      title : joi.string().minlength(2).maxlength(50).trim().match([/^[A-Za-z0-9]+$/]).required(),
      author : joi.string().minlength(2).maxlength(50).trim().match([/^[A-Za-z0-9]+$/]).required(),
      genre :joi.string().minlength(2).maxlength(50).trim().required(),
      page : joi.number().max(1000).min(3).required(),
      rate : joi.number(),
      publishYear:joi.number().max([new Date().getFullYear()]).required(),
      period : joi.string().lowercase().required()
    })

    return schema.validate(data)

  }catch(error){
    throw new Error(error)
  }
}