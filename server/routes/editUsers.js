const _ = require("lodash");
const bcrypt = require("bcrypt");
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const { editUser, validate } = require("../models/editUser");

router.get('/:id', auth, async (req, res) => {
    let name;
    const user = await User.findById(req.params.id);

    if (!user) return res.status(400).send('User not found!');

    name = user.name;

    res.status(200).send(name);
});

router.post("/", auth, async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    console.log(req.body);

    let user = await User.findById(req.user._id);
    if (!user) return res.status(404).send('The user with the given ID was not found.');

    user.name = req.body.name;

    
   new editUser({
        name: req.body.name
    });
  await user.save();
  res.status(200).send('Account name changed.');
});




module.exports = router;
