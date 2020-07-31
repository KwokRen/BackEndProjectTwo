const db = require('../db/connection.js');
const Food = require('../models/food.js');
const Fitness = require('../models/fitness.js')
const mongoose = require('../db/connection.js');

const foodSeed = [
    {
        dayNumber: 1,
        breakfast: ["Boiled Eggs", "Fruits", "Oatmeal"],
        lunch: ["Chicken Breast", "White Rice", "Caesar Salad"],
        dinner: ["Spinach", "Steak", "Potatoes"]
    },
    {
        dayNumber: 2,
        breakfast: ["Scrambled Eggs", "Chia Pudding", "Peanut Butter Sandwich"],
        lunch: ["Chicken Thighs", "Spaghetti"],
        dinner: ["Mash Potatoes", "Peas", "Corn"]
    }
]

const foodSeeding = async () => {
    await Food.deleteMany({});
    await Promise.all (
        foodSeed.map(async element => {
            let fitnessDay = await Fitness.findOne({day: element.dayNumber})
             element.fitnessId = fitnessDay._id
            let createFoodSeed = await Food.create(element);
            await fitnessDay.food.push(createFoodSeed._id);
            await fitnessDay.save();
            console.log(fitnessDay);
            console.log(createFoodSeed);
        })
    )
    mongoose.connection.close()
}

foodSeeding()