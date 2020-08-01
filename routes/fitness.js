const express = require('express');
const fitnessRouter = express.Router();
const {index, getOne, create, update, destroy} = require('../controllers/fitness');
const fitness = require('../controllers/fitness');

fitnessRouter.get('/', index);

fitnessRouter.get('/:id', getOne);

fitnessRouter.post('/', create);

fitnessRouter.put('/:id', update);

fitnessRouter.delete('/:id', destroy);

module.exports = fitnessRouter