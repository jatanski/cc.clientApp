const { Note, validate } = require('../models/note');
const auth = require('../middleware/auth');
const { User } = require('../models/user');

const express = require('express');
const router = express.Router();


router.get('/', auth, async (req, res) => {

    // Check if user exist
    let user = await User.findById( req.user._id );
    if (!user) return res.status(400).send("User not found.");

    // Check if admin
    if(!req.user.isAdmin) return res.status(403).send('You are not an admin.');

    const notes = user.notes;

    res.status(200).send(notes);
});

router.get('/:id', auth, async (req, res) => {
    // Check if user exist
    let user = await User.findById( req.user._id );
    if (!user) return res.status(400).send("User not found.");

    // Check if admin
    if(!req.user.isAdmin) return res.status(403).send('You are not an admin.');

    const userId = req.params.id;

    const idx = user.notes.findIndex((note) => {
        return note.userId === userId;
    });

    if (idx === -1) return res.status(404).send('Note with the given Username not found.');

    const note = user.notes[idx];


    res.status(200).send(note);
});

router.post('/', auth, async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if user exist
    let user = await User.findById( req.user._id );
    if (!user) return res.status(400).send("User not found.");

    // Check if admin
    if(!req.user.isAdmin) return res.status(403).send('You are not an admin.');

    const userId = req.body.userId;

    const idx = user.notes.findIndex((note) => {
        return note.userId === userId;
    });
    if (idx !== -1)
        user.notes.splice(idx, 1);

    const date = Date.now();

    const note = new Note({
        date: date,
        comment: req.body.comment,
        userId: userId
    });
    user.notes.unshift(note);


    user = await user.save();

    res.status(200).send('Note assigned.');
});

router.delete('/:id', auth, async (req, res) => {

    // Check if user exist
    let user = await User.findById( req.user._id );
    if (!user) return res.status(400).send("User not found.");

    // Check if admin
    if(!req.user.isAdmin) return res.status(403).send('You are not an admin.');

    const userId = req.params.id;

    const idx = user.notes.findIndex((note) => {
        return note.userId === userId;
    });

    if (idx === -1) return res.status(404).send('Note with the given user id not found.');

    user.notes.splice(idx, 1);

    user = await user.save();
    res.status(200).send('Note removed.');
});

module.exports = router;
