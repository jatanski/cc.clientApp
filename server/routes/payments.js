const { Payment, validate } = require('../models/payment');
const auth = require('../middleware/auth');
const { User } = require('../models/user');

const express = require('express');
const router = express.Router();


router.get('/:id', auth, async (req, res) => {
    let payments;
    const user = await User.findById(req.params.id);

    if (!user) return res.status(400).send('User not found!');

    payments = user.payments;

    res.status(200).send(payments);
});


router.post('/:id', auth, async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('The user with the given ID was not found.');

    const date = Date.now();

    const payment = new Payment({
        amount: req.body.amount,
        date: date
    });
    
    user.balance = user.balance - req.body.amount;

    user.payments.unshift(payment);

    user = await user.save();

    res.status(200).send('Payment sent.');
});

router.delete('/:id', auth, async (req, res) => {

    const paymentId = req.params.id;

    let user = await User.findById(req.user._id);
    if (!user) return res.status(404).send('The user with the given ID was not found.');


    const idx = user.payments.findIndex((pay) => {
        return pay._id === paymentId;
    });

    if (idx === -1) return res.status(404).send('Payment with the given id not found.');

    const payment = user.payments[idx];
    user.payments.splice(idx, 1);

    user = await user.save();
    res.status(200).send(payment);
});

module.exports = router;
