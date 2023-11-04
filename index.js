const express = require('express');
const app = express();

//Midleware

app.use(express.json());

const apiUser = require('./routes/users');
app.use('/api/user', apiUser);

app.listen(3000);