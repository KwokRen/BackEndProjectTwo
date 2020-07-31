const db = require('../db/connection.js');
const Fitness = require('../models/fitness.js');

const index = async (req, res) => {
    try {
        const allFitness =  await Fitness.find({});
        res.status(200).json(allFitness);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const create = async (req, res) => {
    try {
        const createFitness =  await Fitness.create(req.body);
        res.status(200).json(createFitness);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const update = async (req, res) => {
    try {
        const updateFitness =  await Fitness.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updateFitness);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const destroy = async (req, res) => {
    try {
        const deleteFitness =  await Fitness.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteFitness);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {index, create, update, destroy}