const db = require('../db/connection.js');
const { Schema, model, SchemaTypes } = require("mongoose");

const trackerSchema = new Schema(
    {
        focus: String,
        exercise: [{type:Schema.Types.ObjectId, ref: 'exercise'}],
        food: [{type:Schema.Types.ObjectId, ref: 'food'}]
    }
);

const tracker = model('tracker', trackerSchema);
module.exports = tracker;