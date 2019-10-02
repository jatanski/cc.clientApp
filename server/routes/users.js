const _ = require("lodash");
const bcrypt = require("bcrypt");
const auth = require('../middleware/auth');
const express = require("express");
const router = express.Router();
const { User, validate } = require("../models/user");

router.post("/", async (req, res) => {
    // Validate request with Joi
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  console.log(req.body);

  // Check if given email is already in use
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

    // Create and save User
    user = new User (_.pick(req.body, ['name', 'email', 'password', 'isAdmin', 'dateOfBirth']));
    // Generate salt and hashed password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)

  await user.save();

  const token = user.generateAuthToken();
  res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
});

router.get('/', auth, async (req, res) => {
  let user = await User.findById(req.user._id);
  if (!user) return res.status(404).send('The user was not found.');
  
  res.status(200).send(user);
});

module.exports = router;
