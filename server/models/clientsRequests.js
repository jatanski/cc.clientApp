const mongoose = require('mongoose');

const ClientsRequest = mongoose.model('ClientsRequest', new mongoose.Schema({
    user: {
        type: Object,
        required: true
    }
}));

exports.ClientsRequest = ClientsRequest;

