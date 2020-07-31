const db = require('../db/connection.js');
const { Schema, model } = require("mongoose");

const fitnessSchema = new Schema(
    {
        day: String,
        exercise : {
            routines: [String],
            difficulty: String,
            directionVideo: String,
        },
        food: [{type:Schema.Types.ObjectId, ref:'food'}]
    }
);

const fitness = model('fitness', fitnessSchema);
module.exports = fitness;