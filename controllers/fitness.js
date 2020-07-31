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

module.exports = {index}