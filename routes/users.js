const express = require('express');
const appUser = express();
const { postUser } = require('../controllers/usersController')

appUser.post('', postUser);

module.exports = appUser;

