const db = require('../db/connection.js');
const { Schema, model } = require("mongoose");

const fitnessSchema = new Schema(
    {
        day: Number,
        exercises: [{
            routine: String,
            difficulty: String,
            sets: Number,
            reps: Number,
            directionVideo: String,
        }],
        food: [{type:Schema.Types.ObjectId, ref:'food'}]
    }
);

const fitness = model('fitness', fitnessSchema);
module.exports = fitness;