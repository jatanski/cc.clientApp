const express = require('express');

// importy routerow
const userRouter = require('./../routes/users');
const authRouter = require('../routes/auth');
const messageRouter = require('../routes/messages');
const requestRouter = require('./../routes/request');

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
  
  // Errors handler
  app.use(error);
};