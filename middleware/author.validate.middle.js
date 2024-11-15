const {authorValidator} = require("../validator/author.validator")

module.exports.authorValidate = (req , res , next) => {
  try{
    const [error] = authorValidator(req.body)
    if (error) {
      return res.status(400).json({message : error.details[0]})
    }
  }catch(error){
    next(error)
  }
}