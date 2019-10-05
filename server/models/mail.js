const Joi = require('@hapi/joi');

function validateEmail(email) {
    const emailSchema = {
        to: Joi.string().min(5).max(50).email().required(),
        subject: Joi.string().min(5).max(255).required(),
        html: Joi.string().min(5).max(1024).required()
    };
  
    return Joi.validate(email, emailSchema);
}

module.exports.validate = validateEmail;