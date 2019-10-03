const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const SentMessage = mongoose.model('SentMessage', new mongoose.Schema({
  date: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  receivers: {
    type: Array,
    required: true,
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
  }
}));

function validateSentMessage(msg) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    textContent: Joi.string().min(5).max(1024).required()
  };

  return Joi.validate(msg, schema);
}

exports.SentMessage = SentMessage; 
exports.validate = validateSentMessage;