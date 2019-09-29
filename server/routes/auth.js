const Joi = require("@hapi/joi");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { User } = require("../models/user");

router.post("/", async (req, res) => {
    // Validate request with Joi
  const { error } = await validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  console.log(req.body);

  // Check if given email is already in use
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");

  //Check if given password is valid
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password");

  //Creating and sending the token
  const token = user.generateAuthToken();
  res.send(token);
});

  function validate (req) {
    const schema = {
      email: Joi.string()
        .min(5)
        .max(255)
        .required()
        .email(),
      password: Joi.string()
        .min(5)
        .max(1024)
        .required()
    };

    return Joi.validate(req, schema);

};

module.exports = router;
