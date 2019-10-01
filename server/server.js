const express = require('express');
const app = express();
const config = require('config');

require('./startup/setHeaders')(app);
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/prod')(app);

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = server;
