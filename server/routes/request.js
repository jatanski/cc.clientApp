const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const { ClientsRequests, Clients, SignedAdmin } = require('../models/clientsRequests');
const auth = require('../middleware/auth');


router.post("/", auth, async (req, res) => {

    // Get choosen Admin
    const choosenAdmin = req.body;

    // Get id of the logged user
    const user = await User.findById(req.user._id)

    // Add logged user to choosen Admins clientRequest
    const ClientsRequest = new ClientsRequest({
        user: user
    });
    
    choosenAdmin.clientsRequests.push(ClientsRequest);
    await choosenAdmin.save();

    res.status(200).send('Request sent');
});

router.post("/:choice/:id", auth, async (req, res) => {
    // What is what
    const choice = req.params.choice;
    const id = req.params.id;
    const admin = await User.findById(req.user._id);
    const user = req.body;

    // errors
    const error = !['decline', 'accept'].includes(choice);
    if (error) return res.status(400).send('Wrong route!');


    // if decline delete request from 'ClientsRequest' 
    if (choice === 'decline'){
        admin.clientsRequests.splice(id, 1)
        await admin.save();

        // if accepted delete request from 'ClientsRequest'
        // and add user to admins 'clients'
        // and add Admin to the users 'signedAdmin'
    } else if (choice === 'accept'){
        admin.clientsRequests.splice(id, 1);

        const Clients = new Clients({
            user: user
        });

        const SignedAdmin = new SignedAdmin({
            Admin: admin
        })

        admin.clients.push(Clients);
        user.signedAdmin.push(SignedAdmin);

        await admin.save();
        await user.save();
    }
});


module.exports = router;