const _ = require("lodash");
const bcrypt = require("bcrypt");
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const express = require("express");
const router = express.Router();
const { User, validate } = require("../models/user");
const Joi = require('@hapi/joi');

router.get('/', auth, async (req, res) => {
  let user = await User.findById(req.user._id);
  if (!user) return res.status(404).send('The user was not found.');

  res.status(200).send(user);
});

router.get('/list', [auth, admin], async (req, res) => {
    let users = await User.find({}, ['name', 'email', 'payments']);
    if (!users) return res.status(404).send('Not a single user was found.');
    res.status(200).send(users);
});

router.get('/deadline/:id', auth, async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user) return res.status(404).send('The user was not found.');

  const lastPayment = parseInt(user.payments[0].date);

  const daysLeft = (lastPayment + 86400000 * 30 - new Date().getTime()) / 86400000;
  const hoursLeft = daysLeft * 24;
  const minutesLeft = hoursLeft * 60;
  const dateLeftObject = {
    days: Math.floor(daysLeft),
    hours: Math.floor(hoursLeft),
    minutes: Math.floor(minutesLeft)
  };

  res.status(200).send(dateLeftObject);
});




router.post("/", async (req, res) => {
    // Validate request with Joi
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  console.log(req.body);

  // Check if given email is already in use
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  // Find all Admins
  let allAdmins = await User.find({ isAdmin: true });

    // Create and save User
    user = new User (_.pick(req.body, ['name', 'email', 'password', 'isAdmin', 'dateOfBirth']));
    // Generate salt and hashed password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  let registeredUser = (_.pick(user, ['_id', 'name', 'email']));
  let sendAll = (registeredUser, allAdmins);

  const token = user.generateAuthToken();
  res.header('x-auth-token', token).send(sendAll);
});


router.post('/balance', auth, async (req, res) => {
  let user = await User.findById(req.user._id);
  if (!user) return res.status(404).send('The user was not found.');

  const { error } = validateBalance(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  user.balance += req.body.balance;

  user = await user.save();

  res.status(200).send('Added cash to account. Current balance: ' + user.balance);
});


router.delete("/:id", [auth, admin], async (req, res) => {
  let user = await User.findById( req.params.id );
  if (!user) return res.status(400).send("User not found.");

  await user.remove();
  res.send('User has been removed.');
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
