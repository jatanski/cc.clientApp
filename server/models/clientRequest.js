const mongoose = require('mongoose');
const Joi = require("@hapi/joi");

const ClientRequest = mongoose
    .model('ClientsRequests', new mongoose.Schema({ 
        user: Object,
        date: Date
    }));

function validateRequest(request) {
    const schema = {
        adminEmail: Joi.string().min(5).max(255).required().email()
    };

    return Joi.validate(request, schema);
} 

exports.ClientRequest = ClientRequest;
exports.validate = validateRequest;
