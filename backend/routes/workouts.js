const express = require('express')
const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

// GET a single workout
//:id will look like "localhost:4000/api/workouts/1231"
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})

//POST a new workout
router.post('/', (req, res) => {
    res.json({mssge: 'POST a new workout'})
})

//DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssge: 'DELETE a workout'})
})

//UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssge: 'UPDATE a workout'})
})


//export the router workout so that it can be used in the server.js file
module.exports = router