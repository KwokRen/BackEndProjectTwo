const db = require('../db/connection.js');
const Fitness = require('../models/fitness.js');
const mongoose = require('../db/connection.js');

const fitnessSeed = [
    {
        day: 1,
        exercises: [
            {
                routine: "Pushups",
                difficulty: "Medium",
                sets: 5,
                reps: 10,
                directionVideo: "something.com",
            },
            {
                routine: "Pullups",
                difficulty: "Hard",
                sets: 5,
                reps: 10,
                directionVideo: "somethingelse.com" 
            }
        ],
    },  
    {
        day: 2,
        exercises: [
            {
                routine: "Situps",
                difficulty: "Easy",
                sets: 10,
                reps: 10,
                directionVideo: "somethingsitups.com",
            },
            {
                routine: "Squats",
                difficulty: "Hard",
                sets: 5,
                reps: 10,
                directionVideo: "somethingsquats.com" 
            }
        ]
    }
]


const fitnessSeeding = async () => {
    await Fitness.deleteMany({});
    await Fitness.insertMany(fitnessSeed,
    (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
        mongoose.connection.close()
    })
}

fitnessSeeding()