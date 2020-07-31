const express = require('express');
const fitnessRouter = express.Router();
const {index, create, update} = require('../controllers/fitness');
const fitness = require('../controllers/fitness');

fitnessRouter.get('/', index);

fitnessRouter.post('/', create);

fitnessRouter.put('/:id', update);

module.exports = fitnessRouter