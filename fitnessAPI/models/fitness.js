const db = require('../db/connection.js');
const { Schema, model } = require("mongoose");

const fitnessSchema = new Schema(
    {
        routine: String,
        difficulty: String,
        sets: Number,
        reps: Number,
        directionVideo: String
    }
);

const fitness = model('fitness', fitnessSchema);
module.exports = fitness;