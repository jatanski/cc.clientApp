const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const Payment = mongoose.model('Payment', new mongoose.Schema({
    date: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    amount: {
        type: Number,
        required: true
    }
}));

function validatePayment(pay) {
    const schema = {
        amount: Joi.number().min(100).required()
    };

    return Joi.validate(pay, schema);
}

exports.Payment = Payment;
exports.validate = validatePayment;
