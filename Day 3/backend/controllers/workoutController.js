//get the schema from the model file
const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    //find({}) means find all
    //find({reps: 10}) means find all documents that have reps: 10
    //sort({createdAt: -1}) means sort it in descending order from its creation
    res.status(200).json(workouts)
}

//get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params
    //get the id being inputed by the user using the req.params (all parameters are stored here)
    
    //make sure that the id input is in valid format of MongoDB
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    //find the item by id using findById(id)
    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(400).json({error: 'No workouts found'})
    }

    res.status(200).json(workout)
}

//create new workout
const createWorkout = async (req, res) => {
    //create the object variable that will hold the input of the user
    const {title, load, reps} = req.body

    //do a try catch to validate the storing of the json file to MongoDB
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

//delete a workout
const deleteWorkout = async (req, res) => {
    //get the id and validate if it is correct
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    //find the item by its id and delete it
    const workout = await Workout.findOneAndDelete({_id: id})
    //validate if there is indeed an item by that id
    if (!workout) {
        return res.status(400).json({error: 'No workouts found'})
    }

    res.status(200).json(workout)

}

//update a workout
const updateWorkout = async (req, res) => {
    //get the id and validate if it is correct
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    //find the single item and update them
    //base the update on the input that the user entred in the req.body
    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    //validate if there is indeed an item by that id
    if (!workout) {
        return res.status(400).json({error: 'No workouts found'})
    }

    res.status(200).json(workout)
}

//export the functions
module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}