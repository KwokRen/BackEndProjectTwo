const express = require('express');
const fitnessRouter = express.Router();
const {indexFitness, indexFood, getOneFitness, create, foodUpdate, fitnessUpdate, destroyFitness, destroyFood} = require('../controllers/fitness');
const fitness = require('../controllers/fitness');

fitnessRouter.get('/', indexFitness);

fitnessRouter.get('/food', indexFood);

fitnessRouter.get('/:id', getOneFitness);

fitnessRouter.post('/', create);

fitnessRouter.put('/:id', fitnessUpdate);

fitnessRouter.put('/food/:id', foodUpdate);

fitnessRouter.delete('/:id', destroyFitness);

fitnessRouter.delete('/food/:id', destroyFood);

module.exports = fitnessRouter