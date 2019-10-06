const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const editUser = mongoose.model('editUser', new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 50
      }
    
}));

function validateEditUser(model) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required()

  }
    
  return Joi.validate(model, schema);
  };

exports.editUser = editUser; 
exports.validate = validateEditUser;
