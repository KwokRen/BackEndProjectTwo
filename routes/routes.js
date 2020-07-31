const express = require('express');
const fitnessRouter = express.Router();
const {index, create} = require('../controllers/fitness');
const fitness = require('../controllers/fitness');

fitnessRouter.get('/', index);

fitnessRouter.post('/', create);

module.exports = fitnessRouter