const express = require('express');
const fitnessRouter = express.Router();
const {index} = require('../controllers/fitness');
const fitness = require('../controllers/fitness');

fitnessRouter.get('/', index);

module.exports = fitnessRouter