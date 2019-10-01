const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const ReceivedMessage = mongoose.model('ReceivedMessage', new mongoose.Schema({
  date: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  sender: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  textContent: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  new: {
      type: Boolean,
      default: true
  }
}));

function validateReceivedMessage(msg) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    textContent: Joi.string().min(5).max(1024).required()
  };

  return Joi.validate(msg, schema);
}

exports.ReceivedMessage = ReceivedMessage; 
exports.validate = validateReceivedMessage;