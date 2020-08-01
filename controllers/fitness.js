const db = require('../db/connection.js');
const Fitness = require('../models/fitness.js');
const Food = require('../models/food.js')

const index = async (req, res) => {
    try {
        const allFitness =  await Fitness.find().populate('food');
        res.status(200).json(allFitness);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const getOne = async (req, res) => {
    try {
        const oneFitness = (await Fitness.findById(req.params.id).populate('food'));
        res.status(200).json(oneFitness);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const create = async (req, res) => {
    try {
        const createFitness =  await Fitness.create(req.body[0]);
        const createFood = await Food.create(req.body[1]);
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

// const update = async (req, res) => {
//     try {
//         const updateFitness =  await Fitness.findByIdAndUpdate(req.params.id, req.body, {new: true});
//         res.status(200).json(updateFitness);
//     }
//     catch (error) {
//         res.status(400).send(error);
//     }
// }

const destroy = async (req, res) => {
    try {
        const deleteFitness =  await Fitness.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteFitness);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {index, getOne, create, destroy}