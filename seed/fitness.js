const db = require('../db/connection.js');
const Fitness = require('../models/fitness.js');
const mongoose = require('../db/connection.js');

const fitnessSeed = []

  Fitness.insertMany(fitnessSeed,
    (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
        mongoose.connection.close()
    })