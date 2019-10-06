const jwt = require("jsonwebtoken")
const config = require("config");
const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  avatar: {
    type: String,
    minlength: 5,
    maxlength: 512,
    deafult: "https://osclass.calinbehtuk.ro/oc-content/themes/vrisko/images/no_user.png"
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  dateOfBirth: {
    type: String,
    minlength: 10,
    maxlength: 11,
    required: true,
  },
  messages: {
    sent: {
      type: Array,
      required: true
    },
    received: {
      type: Array,
      required: true
    },
    bin: {
      type: Array,
      required: true
    }
  },
  clientsRequests: {
    type: Array,
    required: true
  },
  clients: {
    type: Array,
    required: true
  },
  signedAdmin: {
    type: String
  },
  payments: {
    type: Array,
    required: true
  },
  balance: {
    type: Number,
    required: true,
    default: 0
  },
  notes: {
    type: Array,
    required: true
  }
});


userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
  return token;
}

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(1024)
      .required(),
    dateOfBirth: Joi.string()
      .min(10)
      .max(11)
      .required(),
    isAdmin: Joi.boolean()
      .required()
  }
    
  return Joi.validate(user, schema);
  };

  

module.exports.User = User;
module.exports.validate = validateUser;
