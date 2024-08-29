const express = require('express')
//get the functions on from the workoutController
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
//:id will look like "localhost:4000/api/workouts/1231"
router.get('/:id', getWorkout)

//POST a new workout
//you can use the function you made from the workoutController file
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)


//export the router workout so that it can be used in the server.js file
module.exports = router