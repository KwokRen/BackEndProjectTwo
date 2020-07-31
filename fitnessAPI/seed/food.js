const db = require('../db/connection.js');
const Food = require('../models/food.js');
const mongoose = require('../db/connection.js');

const foodSeed = [
    {
        breakfast: ["Boiled Eggs", "Fruits", "Oatmeal"],
        lunch: ["Chicken Breast", "White Rice", "Caesar Salad"],
        dinner: ["Spinach", "Steak", "Potatoes"]
    },
    {
        breakfast: ["Scrambled Eggs", "Chia Pudding", "Peanut Butter Sandwich"],
        lunch: ["Chicken Thighs", "Spaghetti"],
        dinner: ["Mash Potatoes", "Peas", "Corn"]
    }
]

Food.insertMany(foodSeed,
    (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
        mongoose.connection.close()
    })