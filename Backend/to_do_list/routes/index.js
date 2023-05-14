const express = require('express');

const Router = express.Router();

//fetching the controllers
Router.get('/',require('../controllers/homeController').home);
Router.post('/new-task',require('../controllers/createController').create);
Router.get('/delete-task',require('../controllers/deleteController').delete);
Router.get('/toggle-task',require('../controllers/toggleController').toggle);

console.log('Connected to router');
module.exports = Router;