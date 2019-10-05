const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const { ClientsRequest } = require('../models/clientsRequests');
const auth = require('../middleware/auth');


router.post("/", auth, async (req, res) => {

    // Get choosen Admin
    const choosenAdmin = req.body;

    // Get id of the logged user
    const user = await User.findById(req.user._id)

    // Add logged user to choosen Admins clientRequest
    // Gdzie to dodać ??
    const ClientsRequest = new ClientsRequest(user);
    
    await ClientsRequest.save;

    res.status(200).send('Request sent');
});

module.exports = router;