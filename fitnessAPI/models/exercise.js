const db = require('../db/connection.js');
const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema(
    {
        routine: String,
        difficulty: String,
        sets: Number,
        reps: Number,
        directionVideo: String
    }
);

const exercise = model('exercise', exerciseSchema);
module.exports = exercise;