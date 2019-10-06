const express = require('express');

// importy routerow
const userRouter = require('./../routes/users');
const authRouter = require('../routes/auth');
const messageRouter = require('../routes/messages');
const requestRouter = require('./../routes/request');
const paymentRouter = require('../routes/payments');
const noteRouter = require('../routes/notes');
const mailerRouter = require('../routes/mailer');

// -----
const error = require('../middleware/error');

module.exports = function(app) {

  //Decode req
  app.use(express.json());

  //All routes
  app.use('/api/users', userRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/messages', messageRouter);
  app.use('/api/request', requestRouter);
  app.use('/api/payments', paymentRouter);
  app.use('/api/notes', noteRouter);
  app.use('/api/mailer', mailerRouter);

  // Errors handler
  app.use(error);
};
