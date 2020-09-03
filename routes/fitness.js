const express = require('express');
const fitnessRouter = express.Router();
const {indexFitness, indexFood, getOneFitness, getOneFood, create, foodUpdate, fitnessUpdate, destroy} = require('../controllers/fitness');

fitnessRouter.get('/', indexFitness);

fitnessRouter.get('/food', indexFood);

fitnessRouter.get('/:id', getOneFitness);

fitnessRouter.get('/food/:id', getOneFood);

fitnessRouter.post('/', create);

fitnessRouter.put('/:id', fitnessUpdate);

fitnessRouter.put('/food/:id', foodUpdate);

fitnessRouter.delete('/:id', destroy);

module.exports = fitnessRouter