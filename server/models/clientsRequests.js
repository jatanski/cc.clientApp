const mongoose = require('mongoose');

const ClientsRequests = mongoose.model('ClientsRequests', new mongoose.Schema({
    user: {
        type: Object,
        required: true
    }
}));

const Clients = mongoose.model('Clients', new mongoose.Schema({
    user: {
        type: Object,
        required: true
    }
}));

const SignedAdmin = mongoose.model('SignedAdmin', new mongoose.Schema({
    Admin: {
        type: Object,
        required: true
    }
}));

exports.ClientsRequests = ClientsRequests;
exports.Clients = Clients;
exports.SignedAdmin = SignedAdmin;
