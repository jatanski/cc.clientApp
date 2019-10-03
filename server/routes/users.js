const _ = require("lodash");
const bcrypt = require("bcrypt");
const auth = require('../middleware/auth');
const express = require("express");
const router = express.Router();
const { User, validate } = require("../models/user");
const Joi = require('@hapi/joi');

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
    user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const token = user.generateAuthToken();
  res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
});

router.delete("/:id", auth, async (req, res) => {

  // Check if admin
  if(!req.user.isAdmin) return res.status(403).send('You are not an admin.');

  // Check if user exist
  let user = await User.findById( req.param.id );
  if (!user) return res.status(400).send("User not found.");

  await user.remove();
  res.send('User has been deleted.');
});

router.get('/', auth, async (req, res) => {
  let user = await User.findById(req.user._id);
  if (!user) return res.status(404).send('The user was not found.');

  res.status(200).send(user);
});

router.post('/balance/:id', auth, async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user) return res.status(404).send('The user was not found.');

  const { error } = validateBalance(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  user.balance += req.body.balance;

  user = await user.save();

  res.status(200).send('Added cash to account. Current balance: ' + user.balance);
});

function validateBalance(balance) {
  const schema = {
    balance: Joi.number()
        .min(0)
        .required()
  };

  return Joi.validate(balance, schema);
}


module.exports = router;
