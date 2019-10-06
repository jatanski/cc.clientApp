const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const Note = mongoose.model('Note', new mongoose.Schema({
    date: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    comment: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}));

function validateNote(note) {
    const schema = {
        comment: Joi.string().required(),
        userId: Joi.string().required()
    };

    return Joi.validate(note, schema);
}

exports.Note = Note;
exports.validate = validateNote;
