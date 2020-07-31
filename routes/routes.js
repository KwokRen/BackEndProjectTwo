const express = require('express');
const fitnessRouter = express.Router();
const {index, create, update, destroy} = require('../controllers/fitness');
const fitness = require('../controllers/fitness');

fitnessRouter.get('/', index);

fitnessRouter.post('/', create);

fitnessRouter.put('/:id', update);

fitnessRouter.delete('/:id', destroy);

module.exports = fitnessRouter