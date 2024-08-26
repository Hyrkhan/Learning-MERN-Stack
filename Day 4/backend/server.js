//install the dotenv in order to use its functions
//dotenv ensures security in sensitive codes like port number.. 
//you can use .env file and use the function "process.env.(variableName)"
require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

// invoke the function express
const app = express()

//middleware
//this function can display log all of the requests being made to the server
//like GET requests or POST requests, its good for debugging
app.use(express.json())

app.use((request, respond, next) => {
    console.log(request.path, request.method)
    next()
})

//routes from the workout routes file
//only will activate after the /api/workouts is called
app.use('/api/workouts', workoutRoutes)


//connect to MongoDB using the URI string in the .env
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests (use process.env to get the secret port number)
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })        
    })
    .catch((error) => {
        console.log(error)
    }) 

//npm run dev to test run the server while also allowing the change listening

