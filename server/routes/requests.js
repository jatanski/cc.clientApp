const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const { ClientRequest, validate } = require('../models/clientRequest');
const auth = require('../middleware/auth');


router.post("/", auth, async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    // Get choosen Admin
    let admin = await User.findOne({email: req.body.adminEmail});
    if (!admin) return res.status(404).send('The admin with the given ID was not found.');
    if (!admin.isAdmin) return res.status(400).send('This user is not an admin!');

    // Get id of the logged user
    const user = await User.findById(req.user._id)
    if (!user) return res.status(404).send('The user with the given ID was not found.');
    if (user.signedAdmin) return res.status(400).send('You are already signed to an Admin.');

    // Check if client already sent request to this admin
    const idx = admin.clientsRequests.findIndex(request => request.user._id == req.user._id );
    console.log(idx);
    if (idx > -1) return res.status(403).send('You already sent request to this Admin!');

    // Create new request
    const date = Date.now();

    const newRequest = new ClientRequest({
        user: user,
        date: date
    });
    
    admin.clientsRequests.push(newRequest);
    await admin.save();

    res.status(200).send('Request sent');
});

router.put("/:choice/:id", auth, async (req, res) => {

    const choice = req.params.choice;
    const requestId = req.params.id;

    // Get logged user - admin
    let admin = await User.findById(req.user._id);
    if (!admin) return res.status(404).send('The admin with the given ID was not found.');

    // Get position of 'request' in admin.clientsRequests array
    // and define 'request' object
    const idx = admin.clientsRequests.findIndex(request => {
        return request._id == requestId
    });
    if (idx === -1) return res.status(404).send('Request with the given id not found.');
    const request = admin.clientsRequests[idx];

    // Get client from request
    let client = await User.findById(request.user._id);
    if (!client) return res.status(404).send('The request with the given ID was not found.');

    // Check 'choice'
    const error = !['decline', 'accept'].includes(choice);
    if (error) return res.status(400).send('Wrong route!');

    // request is either accepted or declined so we can delete it from admin.clientRequests anyway
    admin.clientsRequests.splice(idx, 1);

    // when choice equals to 'accepted' move client object to admin.clients 
    if (choice === 'accept') {
        if (client.signedAdmin) return res.status(400).send('This client is already signed to an Admin.');
        admin.clients.push(client);
        client.signedAdmin = admin.email;
    }
        
    admin = await admin.save();
    client = await client.save();
    
    res.status(200).send(`Request ${choice}ed`);
});

router.get('/', auth, async (req, res) => {
    const admin = await User.findById(req.user._id);
    if (!admin) return res.status(404).send('The admin with the given ID was not found.');

    res.status(200).send(admin.clientsRequests);
});


module.exports = router;