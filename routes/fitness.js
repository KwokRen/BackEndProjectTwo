const express = require('express');
const fitnessRouter = express.Router();
const {indexFitness, indexFood, getOneFitness, create, foodUpdate, fitnessUpdate, destroy} = require('../controllers/fitness');
const fitness = require('../controllers/fitness');

fitnessRouter.get('/', indexFitness);

fitnessRouter.get('/food', indexFood);

fitnessRouter.get('/:id', getOneFitness);

fitnessRouter.post('/', create);

fitnessRouter.put('/:id', fitnessUpdate);

fitnessRouter.put('/food/:id', foodUpdate);

fitnessRouter.delete('/:id', destroy);

module.exports = fitnessRouter