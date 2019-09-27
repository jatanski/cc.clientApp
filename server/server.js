const express = require('express');
const app = express();
const users = require('./routes/users');
require('./startup/db')();
require('./startup/prod')(app);

//-------------------------------------

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.use('/api/users', users);