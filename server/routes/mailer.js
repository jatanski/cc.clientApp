const express = require('express');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { validate } = require('../models/mail');
const nodemailer = require('nodemailer');
const config = require('config');
const router = express.Router();

router.post('/', [auth, admin], (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: config.get('mailUser'),
          pass: config.get('mailPassword')
        }
    });

    var mailOptions = {
        from: config.get('mailUser'),
        to: req.body.to,
        subject: req.body.subject,
        html: req.body.html
    }
    
    transporter.sendMail(mailOptions, function(error, info) {
        if(error){
            console.log('Mailer error: ' + error);
            res.status(500).send('Nodemailer error')
          return false;
        } else {
            console.log('Message sent: ' + info.response);
            res.status(200).send('Mail sent.')
        };
    });

})

module.exports = router;