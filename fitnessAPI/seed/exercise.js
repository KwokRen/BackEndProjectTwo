const db = require('../db/connection.js');
const Exercise = require('../models/exercise.js');
const mongoose = require('../db/connection.js');

const exerciseSeed = [
    {
        routine: "Squat",
        difficulty: "High",
        sets: 5,
        reps: 10,
        directionVideo: "https://www.youtube.com/watch?v=aclHkVaku9U"
    },
    {
        routine: "Pushup",
        difficulty: "Medium",
        sets: 5,
        reps: 10,
        directionVideo: "https://www.youtube.com/watch?v=IODxDxX7oi4"
    },
    {
        routine: "Pullups",
        difficulty: "High",
        sets: 5,
        reps: 10,
        directionVideo: "https://www.youtube.com/watch?v=eGo4IYlbE5g"
    },
    {
        routine: "Tricep Dips",
        difficulty: "Medium",
        sets: 5,
        reps: 10,
        directionVideo: "https://www.youtube.com/watch?v=0326dy_-CzM"
    }
  ]

  Exercise.insertMany(exerciseSeed,
    (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
        mongoose.connection.close()
    })