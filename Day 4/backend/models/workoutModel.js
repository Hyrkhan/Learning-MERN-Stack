//here we are making the schema of the data to be stored in MongoDB
//the data is to be stored like a JSON file
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//the data desriptions/requirements are listed
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

//export the schema so that it can be used on other files
module.exports = mongoose.model('Workout', workoutSchema)

