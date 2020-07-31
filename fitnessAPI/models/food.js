const db = require('../db/connection.js');
const { Schema, model } = require("mongoose");

const foodSchema = new Schema(
    {
        breakfast: String,
        lunch: String,
        dinner: String
    }
);

const food = model('food', foodSchema);
module.exports = food;