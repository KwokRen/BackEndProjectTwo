const express = require('express');
const fitnessRouter = express.Router();
const {index, getOne, create, foodUpdate, fitnessUpdate, destroy} = require('../controllers/fitness');
const fitness = require('../controllers/fitness');

fitnessRouter.get('/', index);

fitnessRouter.get('/:id', getOne);

fitnessRouter.post('/', create);

fitnessRouter.put('/:id', fitnessUpdate);

fitnessRouter.put('/food/:id', foodUpdate);

fitnessRouter.delete('/:id', destroy);

module.exports = fitnessRouter