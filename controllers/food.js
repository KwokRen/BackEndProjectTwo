const db = require('../db/connection.js');
const Food = require('../models/food.js');

const index = async (req, res) => {
    try {
        const allFood =  await Food.find({});
        res.status(200).json(allFood);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const getOne = async (req, res) => {
    try {
        const oneFood =  await Food.findById(req.params.id);
        res.status(200).json(oneFood);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

// const create = async (req, res) => {
//     try {
//         const createFood =  await Food.create(req.body);
//         res.status(200).json(createFood);
//     }
//     catch (error) {
//         res.status(400).send(error);
//     }
// }

// const destroy = async (req, res) => {
//     try {
//         const deleteFood =  await Food.findByIdAndDelete(req.params.id);
//         res.status(200).json(deleteFood);
//     }
//     catch (error) {
//         res.status(400).send(error);
//     }
// }


module.exports = {index, getOne}