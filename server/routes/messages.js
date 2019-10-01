const { SentMessage, validate } = require('../models/sentMessage'); 
const { ReceivedMessage } = require('../models/receivedMessage'); 
const auth = require('../middleware/auth');
const { User } = require('../models/user');

const express = require('express');
const router = express.Router();

 
router.get('/:target', auth, async (req, res) => {
  const target = req.params.target;

  const error = !['sent', 'received', 'bin'].includes(target);
  if (error) return res.status(400).send('Wrong route!');

  let messages;
  const user = await User.findById(req.user._id);

  if (target === 'sent') {
    messages = user.messages.sent;
  } else if (target === 'received') {
    messages = user.messages.received;
  } else {
    messages = user.messages.bin;
  }
  
  res.status(200).send(messages);
});

router.get('/:target/:id', auth, async (req, res) => {
  const target = req.params.target;
  const id = req.params.id

  const error = !['sent', 'received', 'bin'].includes(target);
  if (error) return res.status(400).send('Wrong route!');

  let messages;
  const user = await User.findById(req.user._id);

  if (target === 'sent') {
    messages = user.messages.sent;
  } else if (target === 'received') {
    messages = user.messages.received;
  } else {
    messages = user.messages.bin;
  }

  const message = messages.find((message) => message._id == id);
  if (!message) return res.status(404).send('The message with the given ID was not found.');
  
  res.status(200).send(message);
});

router.post('/:id', auth, async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    let receiver = await User.findById(req.params.id);
    if (!receiver) return res.status(404).send('The receiver with the given ID was not found.');

    let sender = await User.findById(req.user._id);
    if (!sender) return res.status(404).send('The sender with the given ID was not found.');

    let date = new Date;
    date = date.toLocaleString(undefined, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
  
    const sentMessage = new SentMessage({ 
      title: req.body.title,
      textContent: req.body.textContent,
      receivers: [
        {
          email: sender.email,
          _id: receiver._id
        }
      ],
      date: date
    });

    const receivedMessage = new ReceivedMessage({ 
        title: req.body.title,
        textContent: req.body.textContent,
        sender: {
          email: sender.email,
          _id: sender._id
        },
        date: date
    });

    receiver.messages.received.push(receivedMessage);
    sender.messages.sent.push(sentMessage);

    sender = await sender.save();
    receiver = await receiver.save();
    
    res.status(200).send('Message sent.');
});

router.put('/:id', auth, async (req, res) => {
  let user = await User.findById(req.user._id);

  const idx = user.messages.received.findIndex((message) => {
    return message._id == req.params.id
  });
  if (idx === -1) return res.status(404).send('Message with the given id not found.');

  user.messages.received[idx].new = false;

  user.markModified('new');
  user.markModified('received');
  user.markModified('messages');
  user = await user.save();

  res.status(200).send(user.messages.received[idx]);
});

router.delete('/:target/:id', auth, async (req, res) => {

  const target = req.params.target;
  const id = req.params.id

  const error = !['sent', 'received', 'bin'].includes(target);
  if (error) return res.status(400).send('Wrong route!');

  let user = await User.findById(req.user._id);
  let message;
  let idx;

  if (target === 'sent') {

    idx = user.messages.sent.findIndex((msg) => {
      return msg._id == id
    });
    if (idx === -1) return res.status(404).send('Message with the given id not found.');

    message = user.messages.sent[idx];
    user.messages.sent.splice(idx, 1);
    user.messages.bin.push(message);

  } else if (target === 'received') {
    
    idx = user.messages.received.findIndex((msg) => {
      return msg._id == id
    });
    if (idx === -1) return res.status(404).send('Message with the given id not found.');

    message = user.messages.received[idx];
    user.messages.received.splice(idx, 1);
    user.messages.bin.push(message);

  } else {

    idx = user.messages.bin.findIndex((msg) => {
      return msg._id == id
    });
    if (idx === -1) return res.status(404).send('Message with the given id not found.');

    message = user.messages.bin[idx];
    user.messages.bin.splice(idx, 1);

  };

  user.markModified(`${target}`);
  user.markModified('bin');
  user.markModified('messages');

  user = await user.save();
  res.status(200).send(message);
});

module.exports = router; 