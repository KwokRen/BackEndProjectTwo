const db = require('../db/connection.js');
const Fitness = require('../models/fitness.js');
const Food = require('../models/food.js')

const indexFitness = async (req, res) => {
    try {
        const allFitness =  await Fitness.find().populate('food');
        res.status(200).json(allFitness);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const indexFood = async (req, res) => {
    try {
        const allFood =  await Food.find({});
        res.status(200).json(allFood);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const getOneFitness = async (req, res) => {
    try {
        const oneFitness = (await Fitness.findById(req.params.id).populate('food'));
        res.status(200).json(oneFitness);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const getOneFood = async (req, res) => {
    try {
        const oneFood = await Food.findById(req.params.id);
        res.status(200).json(oneFood);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const create = async (req, res) => {
    try {
        const createFitness =  await Fitness.create(req.body[0]);
        await createFitness.save();
        const createFood = await Food.create(req.body[1]);
        await createFood.save();
        await createFitness.food.push(createFood._id);
        await createFitness.save();
        await createFood.fitnessId.push(createFitness._id);
        await createFood.save();
        const allFitness =  await Fitness.find().populate('food');
        res.status(200).json(allFitness);
    }
    catch (error) {
        res.status(400).send(error);
    }
}
const fitnessUpdate = async (req, res) => {
    try {
        const updateFitness =  await Fitness.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updateFitness);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const foodUpdate = async (req, res) => {
    try {
        const updateFood =  await Food.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updateFood);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const destroy = async (req, res) => {
    try {
        const deleteFitness =  await Fitness.findByIdAndDelete(req.params.id);
        const deleteFood = await Food.findByIdAndDelete(deleteFitness.food);
        const allFitness =  await Fitness.find().populate('food');
        res.status(200).json(allFitness);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {indexFitness, indexFood, getOneFitness, getOneFood, create, foodUpdate, fitnessUpdate, destroy}